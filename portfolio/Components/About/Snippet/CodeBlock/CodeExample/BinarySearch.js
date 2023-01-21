import CodeLine from "../CodeLine";

const codeLineValuesObj = {
  one: [
    {
      element: "function",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "binarySearch",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "array",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "value",
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
      element: "var",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "start",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "0",
      typeOfCode: "number",
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
      element: "var",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "end",
      typeOfCode: "source",
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
      element: "-",
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
  four: [
    {
      element: "var",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "middle",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "Math",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: ".",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "floor",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
    {
      element: "start",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "+",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "end",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
    {
      element: "/",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "2",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  five: [
    {
      element: "var",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "guess",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "array",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "middle",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  six: [
    {
      element: "while",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "start",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "<=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "end",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "&&",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "!==",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "guess",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "parentheses",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "{",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
  ],
  seven: [
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
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "<",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "guess",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
    {
      element: "{",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  eight: [
    {
      element: "end",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "middle",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "-",
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
  nine: [
    {
      element: "}",
      typeOfCode: "array",
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
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ">",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "guess",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
    {
      element: "{",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  eleven: [
    {
      element: "start",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "middle",
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
  twelve: [
    {
      element: "}",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  thirteen: [
    {
      element: "middle",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "Math",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: ".",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "floor",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "start",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "+",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "end",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "/",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "2",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  fourteen: [
    {
      element: "guess",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "array",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "middle",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  fifteen: [
    {
      element: "}",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  sixteen: [
    {
      element: "if",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "(",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "guess",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "===",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "operator",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "{",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  seventeen: [
    {
      element: "return",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "middle",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  eighteen: [
    {
      element: "}",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "else",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline",
    },
    {
      element: "{",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  nineteen: [
    {
      element: "return",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "-",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
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
  twenty: [
    {
      element: "}",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
  ],
  twentyOne: [
    {
      element: "}",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
};

export default function BinarySearch({ children, ...props }) {
  return (
    <code>
      <CodeLine>{codeLineValuesObj.one}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.two}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.three}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.four}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.five}</CodeLine>
      <CodeLine indent="one-level" blockSpacerValue="block-start">
        {codeLineValuesObj.six}
      </CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.seven}</CodeLine>
      <CodeLine indent="three-level">{codeLineValuesObj.eight}</CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.nine}</CodeLine>
      <CodeLine indent="two-level" blockSpacerValue="block-start">
        {codeLineValuesObj.ten}
      </CodeLine>
      <CodeLine indent="three-level">{codeLineValuesObj.eleven}</CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.twelve}</CodeLine>
      <CodeLine indent="two-level" blockSpacerValue="block-start">
        {codeLineValuesObj.thirteen}
      </CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.fourteen}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.fifteen}</CodeLine>
      <CodeLine indent="one-level" blockSpacerValue="block-start">
        {codeLineValuesObj.sixteen}
      </CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.seventeen}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.eighteen}</CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.nineteen}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.twenty}</CodeLine>
      <CodeLine blockSpacerValue="block-start">
        {codeLineValuesObj.twentyOne}
      </CodeLine>
    </code>
  );
}
