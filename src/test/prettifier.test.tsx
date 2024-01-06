import { prettifyText } from "@/lib/utils";


const text1 = '{hgfjhg   :   {   fjhgkdh:   ghjhgj   }   ,djfhg   :fhgkdj}';
const text2 = `{
  hgfjhg: {
    fjhgkdh: ghjhgj
  },
  djfhg: fhgkdj
}`;
const text3 = `{
  field(arg: "value") {
    subField
  }
}`;
const text4 = `{
  field(arg: "value"){
    subField
  }
}`;
const text5 = '(}';

describe('Prettifier', () => {
  test('Works correctly', () => {
    expect(prettifyText(text1)).toBe(text2);
    expect(prettifyText(text3)).toBe(text4);
    expect(prettifyText(text5)).toBeNull();
  });
});
