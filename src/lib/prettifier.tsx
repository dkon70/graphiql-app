type BracketsPairsType = {
  '}': '{';
  ')': '(';
  ']': '[';
  '{': '}';
  '(': ')';
  '[': ']';
};

type BracketsCountType = {
  '{': number;
  '}': number;
  '(': number;
  ')': number;
  '[': number;
  ']': number;
};

const bracketsPairs: BracketsPairsType = {
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
  let dif = 0;
  const bracketsCount: BracketsCountType = {
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
      const elAmount = ++bracketsCount[el as keyof BracketsCountType];
      const elPair = bracketsPairs[el as keyof BracketsPairsType];
      dif = Math.abs(elAmount - bracketsCount[elPair]);
      if (i === 0 && el === '{') {
        totalList.push(el + '\n' + '  '.repeat(1));
      } else if ('})]'.includes(el)) {
        if (elAmount - bracketsCount[elPair] > 0) {
          return null;
        }
        el === '}'
          ? totalList.push(
              '\n' + '  '.repeat(dif) + el + '\n' + '  '.repeat(dif)
            )
          : totalList.push(el);
      } else {
        el === '{'
          ? totalList.push('  ' + el + '\n' + '  '.repeat(dif))
          : totalList.push(el);
      }
    } else if (el === ',') {
      totalList.push(', '.repeat(dif));
    } else {
      totalList.push(el);
    }
  }

  return totalList
    .join('')
    .replace(/\s*:\s*/g, ': ')
    .replace(/\s*\,/, ',')
    .replace(/}\s*}/g, '}\n}');
}
