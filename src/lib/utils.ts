import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type BracketPairsType = {
  '}': '{';
  ')': '(';
  ']': '[';
  '{': '}';
  '(': ')';
  '[': ']';
};

type BracketCountType = {
  '{': number;
  '}': number;
  '(': number;
  ')': number;
  '[': number;
  ']': number;
};

const bracketPairs: BracketPairsType = {
  '}': '{',
  ')': '(',
  ']': '[',
  '{': '}',
  '(': ')',
  '[': ']',
};

export function prettifyText(text: string) {
  const list = text.replace(/\s+/g, '').split('');
  const totalList = [];
  let tabs = 0;
  const bracketCount: BracketCountType = {
    '{': 0,
    '}': 0,
    '(': 0,
    ')': 0,
    '[': 0,
    ']': 0,
  };

  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    if ('{}()[]'.includes(el)) {
      const elCount = ++bracketCount[el as keyof BracketCountType];
      const elPair = bracketPairs[el as keyof BracketPairsType];
      if ('{}'.includes(el)) {
        tabs = Math.abs(bracketCount['{'] - bracketCount['}']);
      }
      if ('})]'.includes(el)) {
        if (elCount - bracketCount[elPair] > 0) {
          return null;
        }
      }
    }

    if (el === '}') {
      totalList.push('\n' + '  '.repeat(tabs) + el + '\n' + '  '.repeat(tabs));
    } else if (el === '{' || el === ',') {
      totalList.push(el + '\n' + '  '.repeat(tabs));
    } else {
      totalList.push(el);
    }
  }

  return totalList
    .join('')
    .replace(/\s*:\s*/g, ': ')
    .replace(/\s*,/g, ',')
    .replace(/}\s*}/g, '}\n}')
    .replace(/\s*\)/g, ')')
    .replace(/\(\s*/g, '(')
    .trim();
}
