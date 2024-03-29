import React from "react";
import CodeLine from "../CodeLine";

const spacer = {
  marginBlock: "26px",
};

const codeLineForMergeFunc = {
  one: [
    {
      element: "function",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "merge",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "firstArray",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "secondArray",
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
      element: "[",
      typeOfCode: "parentheses",
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
  three: [
    {
      element: "var",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "leftIndex",
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
  four: [
    {
      element: "var",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "rightIndex",
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
  five: [
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
      element: "leftIndex",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "<",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "firstArray",
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
      element: "&&",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "rightIndex",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "<",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "secondArray",
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
      element: ")",
      typeOfCode: "inline-end",
      inlineSpacerValue: "none",
    },
    {
      element: "{",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
  ],
  six: [
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
      element: "firstArray",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "leftIndex",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "<",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "secondArray",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "rightIndex",
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
  seven: [
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
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "firstArray",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "leftIndex",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  eight: [
    {
      element: "leftIndex",
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
  nine: [
    {
      element: "}",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
    {
      element: "else",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline",
    },
    {
      element: "{",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  ten: [
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
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "secondArray",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "rightIndex",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "]",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  eleven: [
    {
      element: "rightIndex",
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
  twelve: [
    {
      element: "}",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  thirteen: [
    {
      element: "}",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
  ],
  fourteen: [
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
      element: "leftIndex",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "<",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "firstArray",
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
  fifteen: [
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
      element: "firstArray",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "leftIndex",
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
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  sixteen: [
    {
      element: "leftIndex",
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
  seventeen: [
    {
      element: "}",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
  ],
  eighteen: [
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
      element: "rightIndex",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "<",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "secondArray",
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
  nineteen: [
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
      element: "secondArray",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: "[",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "rightIndex",
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
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: ";",
      typeOfCode: "array",
      inlineSpacerValue: "none",
    },
  ],
  twenty: [
    {
      element: "rightIndex",
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
  twentyOne: [
    {
      element: "}",
      typeOfCode: "parentheses",
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
      element: "result",
      typeOfCode: "source",
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

const codeLineForMergeSortFunc = {
  one: [
    {
      element: "function",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "mergeSort",
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
      element: ")",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
    {
      element: "{",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
  two: [
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
      element: "<=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "1",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: ")",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "return",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline",
    },
    {
      element: "array",
      typeOfCode: "source",
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
      element: "middle",
      typeOfCode: "variable",
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
  four: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "leftSide",
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
      element: "slice",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "0",
      typeOfCode: "number",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "middle",
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
  five: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "rightSide",
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
      element: "slice",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "middle",
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
  six: [
    {
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "sortedLeftside",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "mergeSort",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "leftSide",
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
      element: "const",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "sortedRightside",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "=",
      typeOfCode: "operator",
      inlineSpacerValue: "inline",
    },
    {
      element: "mergeSort",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "rightSide",
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
  eight: [
    {
      element: "return",
      typeOfCode: "keyword",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "merge",
      typeOfCode: "variable",
      inlineSpacerValue: "none",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      inlineSpacerValue: "none",
    },
    {
      element: "sortedLeftside",
      typeOfCode: "source",
      inlineSpacerValue: "none",
    },
    {
      element: ",",
      typeOfCode: "source",
      inlineSpacerValue: "inline-end",
    },
    {
      element: "sortedRightside",
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
  nine: [
    {
      element: "}",
      typeOfCode: "curly",
      inlineSpacerValue: "none",
    },
  ],
};

export default function MergeSort({ children, ...props }) {
  return (
    <React.Fragment>
      <code>
        <CodeLine>{codeLineForMergeFunc.one}</CodeLine>
        <CodeLine indent="one-level">{codeLineForMergeFunc.two}</CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeFunc.three}
        </CodeLine>
        <CodeLine indent="one-level">{codeLineForMergeFunc.four}</CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeFunc.five}
        </CodeLine>
        <CodeLine indent="two-level">{codeLineForMergeFunc.six}</CodeLine>
        <CodeLine indent="three-level">{codeLineForMergeFunc.seven}</CodeLine>
        <CodeLine indent="three-level">{codeLineForMergeFunc.eight}</CodeLine>
        <CodeLine indent="two-level">{codeLineForMergeFunc.nine}</CodeLine>
        <CodeLine indent="three-level">{codeLineForMergeFunc.ten}</CodeLine>
        <CodeLine indent="three-level">{codeLineForMergeFunc.eleven}</CodeLine>
        <CodeLine indent="two-level">{codeLineForMergeFunc.twelve}</CodeLine>
        <CodeLine indent="one-level">{codeLineForMergeFunc.thirteen}</CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeFunc.fourteen}
        </CodeLine>
        <CodeLine indent="two-level">{codeLineForMergeFunc.fifteen}</CodeLine>
        <CodeLine indent="two-level">{codeLineForMergeFunc.sixteen}</CodeLine>
        <CodeLine indent="one-level">{codeLineForMergeFunc.seventeen}</CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeFunc.eighteen}
        </CodeLine>
        <CodeLine indent="two-level">{codeLineForMergeFunc.nineteen}</CodeLine>
        <CodeLine indent="two-level">{codeLineForMergeFunc.twenty}</CodeLine>
        <CodeLine indent="one-level">{codeLineForMergeFunc.twentyOne}</CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeFunc.twentyTwo}
        </CodeLine>
        <CodeLine>{codeLineForMergeFunc.twentyThree}</CodeLine>
      </code>
      <div style={spacer}></div>
      <code>
        <CodeLine>{codeLineForMergeSortFunc.one}</CodeLine>
        <CodeLine indent="one-level">{codeLineForMergeSortFunc.two}</CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeSortFunc.three}
        </CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeSortFunc.four}
        </CodeLine>
        <CodeLine indent="one-level">{codeLineForMergeSortFunc.five}</CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeSortFunc.six}
        </CodeLine>
        <CodeLine indent="one-level">{codeLineForMergeSortFunc.seven}</CodeLine>
        <CodeLine indent="one-level" blockSpacerValue="block-start">
          {codeLineForMergeSortFunc.eight}
        </CodeLine>
        <CodeLine>{codeLineForMergeSortFunc.nine}</CodeLine>
      </code>
    </React.Fragment>
  );
}
