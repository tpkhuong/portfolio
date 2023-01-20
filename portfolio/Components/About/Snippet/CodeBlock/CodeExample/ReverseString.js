import React from "react";
import CodeLine from "../CodeLine/index";

const codeLineValuesObj = {
  one: [
    {
      element: "function",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "reverseString",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    { element: "(", typeOfCode: "parentheses", inlineSpacerValue: "none" },
    {
      element: "string",
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
      element: "var",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "result",
      typeOfCode: "source",
      inlineSpacerValue: "none-end",
    },
    { element: "=", typeOfCode: "operator", inlineSpacerValue: "inline" },
    {
      element: "[",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "array",
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
      element: "arrOfChars",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "string",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "inline",
    },
    {
      element: ".",
      typeOfCode: "keyword",
      inlineSpacerValue: "none",
    },
    {
      element: "split",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "''",
      typeOfCode: "source",
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
  four: [
    {
      element: "for",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "let",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "arrOfChars",
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
      inlineSpacerValue: "inline-end",
    },
    {
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ">",
      typeOfCode: "operator",
      inlineSpacerValue: "inline-start",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "0",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "index",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "--",
      typeOfCode: "obj-dot-access",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "{",
      typeOfCode: "operator",
      inlineSpacerValue: "none",
    },
  ],
  five: [
    {
      element: "let",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "element",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "arrOfChars",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "index",
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
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "element",
      typeOfCode: "source",
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
      element: "join",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "curly",
      inlineSpacerValue: "parentheses",
    },
    {
      element: "''",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "parentheses",
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

export default function ReverseString({ children }) {
  return (
    <code>
      {/* indent is for indentation */}
      <CodeLine>{codeLineValuesObj.one}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.two}</CodeLine>
      <CodeLine indent="one-level">{codeLineValuesObj.three}</CodeLine>
      <CodeLine indent="one-level" blockSpacerValue="block-start">
        {codeLineValuesObj.four}
      </CodeLine>
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
