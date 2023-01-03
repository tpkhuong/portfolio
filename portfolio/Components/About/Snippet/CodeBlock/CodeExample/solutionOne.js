import React from "react";
import CodeLine from "../CodeLine/index";

const testObj = {
  first: [
    {
      element: "function",
      typeOfCode: "obj-dot-access",
      spacerValue: "inline-end",
    },
    {
      element: "const",
      typeOfCode: "string",
      spacerValue: "inline-end",
    },
    { element: ";", typeOfCode: "operator", spacerValue: "inline" },
    {
      element: "=",
      typeOfCode: "operator",
      spacerValue: "inline-start",
    },
    {
      element: "{",
      typeOfCode: "curly",
      spacerValue: "inline-start",
    },
    {
      element: "(",
      typeOfCode: "parentheses",
      spacerValue: "inline-start",
    },
    {
      element: "]",
      typeOfCode: "array",
      spacerValue: "inline-start",
    },
  ],
  second: [
    {
      element: "function",
      typeOfCode: "obj-dot-access",
      spacerValue: "inline-end",
    },
    {
      element: "const",
      typeOfCode: "string",
      spacerValue: "inline-end",
    },
    { element: ";", typeOfCode: "operator", spacerValue: "inline" },
    {
      element: "=",
      typeOfCode: "operator",
      spacerValue: "inline-start",
    },
    {
      element: "{",
      typeOfCode: "operator",
      spacerValue: "inline-start",
    },
    {
      element: "(",
      typeOfCode: "operator",
      spacerValue: "inline-start",
    },
    {
      element: "]",
      typeOfCode: "operator",
      spacerValue: "inline-start",
    },
  ],
};

export default function SolutionOne({ children }) {
  return (
    <code>
      <CodeLine linespacer="hello">{testObj.first}</CodeLine>
      <CodeLine linespacer="world">{testObj.second}</CodeLine>
    </code>
  );
}
