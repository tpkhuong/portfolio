import CodeLine from "../CodeLine";

const codeLineValuesObj = {
  one: [
    {
      element: "function",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "intersection",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "...",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: "array",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "{",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
  two: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "length",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "array",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: ".",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "length",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  three: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "arrayOfObj",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "array",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: ".",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "reduce",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  four: [
    {
      element: "function",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "findValuesInAllArrays",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
    {
      element: "buildingUp",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "operator",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "currentValue",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "operator",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "array",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "{",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  five: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "freqCountObj",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "buildingUp",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "0",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  six: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "result",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "buildingUp",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "1",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  seven: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "indexPlusOne",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "+",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "1",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  eight: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "visitedObj",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "{",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "}",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  nine: [
    {
      element: "currentValue",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: ".",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "forEach",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "=>",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "{",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  ten: [
    {
      element: "if",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "(",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
    {
      element: "!",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "visitedObj",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "array",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "{",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  eleven: [
    {
      element: "visitedObj",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "true",
      typeOfCode: "boolean",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  twelve: [
    {
      element: "freqCountObj",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "(",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "freqCountObj",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "operator",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "|",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "|",
      typeOfCode: "operator",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "0",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "+",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "1",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  thirteen: [
    {
      element: "if",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "(",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "indexPlusOne",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "==",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "length",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "{",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
  fourteen: [
    {
      element: "freqCountObj",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "==",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "length",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "?",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "result",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: ".",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "push",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: ":",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "null",
      typeOfCode: "boolean",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  fifteen: [
    {
      element: "}",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
  sixteen: [
    {
      element: "}",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
  ],
  seventeen: [
    {
      element: "}",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  eighteen: [
    {
      element: "return",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "buildingUp",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  nineteen: [
    {
      element: "}",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  twenty: [
    {
      element: "[",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "{",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "}",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
  ],
  twentyOne: [
    {
      element: ")",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  twentyTwo: [
    {
      element: "return",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "arrayOfObj",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "1",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  twentyThree: [
    {
      element: "}",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
};

export default function Intersection({ children, ...props }) {
  return (
    <code>
      <CodeLine>{codeLineValuesObj.one}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.two}</CodeLine>
      <CodeLine indent="one-level" blockSpacerValue="block-start">
        {codeLineValuesObj.three}
      </CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.four}</CodeLine>
      <CodeLine indent="three-level" blockSpacerValue="block-start">
        {codeLineValuesObj.five}
      </CodeLine>
      <CodeLine indent="three-level">{codeLineValuesObj.six}</CodeLine>
      <CodeLine indent="three-level">{codeLineValuesObj.seven}</CodeLine>
      <CodeLine indent="three-level">{codeLineValuesObj.eight}</CodeLine>
      <CodeLine indent="three-level" blockSpacerValue="block-start">
        {codeLineValuesObj.nine}
      </CodeLine>
      <CodeLine indent="four-level">{codeLineValuesObj.ten}</CodeLine>
      <CodeLine indent="five-level">{codeLineValuesObj.eleven}</CodeLine>
      <CodeLine indent="five-level">{codeLineValuesObj.twelve}</CodeLine>
      <CodeLine indent="five-level" blockSpacerValue="block-start">
        {codeLineValuesObj.thirteen}
      </CodeLine>
      <CodeLine indent="six-level">{codeLineValuesObj.fourteen}</CodeLine>
      <CodeLine indent="five-level">{codeLineValuesObj.fifteen}</CodeLine>
      <CodeLine indent="four-level" blockSpacerValue="block-start">
        {codeLineValuesObj.sixteen}
      </CodeLine>
      <CodeLine indent="three-level">{codeLineValuesObj.seventeen}</CodeLine>
      <CodeLine indent="three-level" blockSpacerValue="block-start">
        {codeLineValuesObj.eighteen}
      </CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.nineteen}</CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.twenty}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.twentyOne}</CodeLine>
      <CodeLine indent="one-level" blockSpacerValue="block-start">
        {codeLineValuesObj.twentyTwo}
      </CodeLine>
      <CodeLine>{codeLineValuesObj.twentyThree}</CodeLine>
    </code>
  );
}
