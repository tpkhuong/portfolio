import CodeLine from "../CodeLine";

const codeLineValuesObj = {
  one: [
    {
      element: "function",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "includes",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "list",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "value",
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
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
  two: [
    {
      element: "let",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "0",
      typeOfCode: "number",
      inlineSpacerValue: "inline-end",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  three: [
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
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "<",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "list",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "inline-end",
    },
    {
      element: ".",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
    {
      element: "length",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "inline-end",
    },
    {
      element: ")",
      typeOfCode: "parentheses",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "{",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
  four: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "item",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "list",
      typeOfCode: "source",
      inlineSpacerValue: "inline",
    },
    {
      element: "[",
      typeOfCode: "array",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "array",
      inlineSpacerValue: "inline-end",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
  ],
  five: [
    {
      element: "if",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "item",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "==",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "value",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: ")",
      typeOfCode: "parentheses",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "return",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "true",
      typeOfCode: "boolean",
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
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "+=",
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
  seven: [
    {
      element: "}",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
  eight: [
    {
      element: "return",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "false",
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
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
};

export default function Includes({ children, ...props }) {
  return (
    <code>
      <CodeLine>{codeLineValuesObj.one}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.two}</CodeLine>
      <CodeLine indent="one-level" blockSpacerValue="block-start">
        {codeLineValuesObj.three}
      </CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.four}</CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.five}</CodeLine>
      <CodeLine indent="two-level">{codeLineValuesObj.six}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.seven}</CodeLine>
      <CodeLine indent="one-level" blockSpacerValue="block-start">
        {codeLineValuesObj.eight}
      </CodeLine>
      <CodeLine>{codeLineValuesObj.nine}</CodeLine>
    </code>
  );
}
