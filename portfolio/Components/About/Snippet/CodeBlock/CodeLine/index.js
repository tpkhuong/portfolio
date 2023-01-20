import React from "react";
import CodeLineStyles from "./CodeLine.module.css";

export default function CodeLine({ children, indent, blockSpacerValue }) {
  return (
    <span
      // indent is for indentation
      data-indentspacer={indent}
      data-typeofblockspacer={blockSpacerValue}
      className={CodeLineStyles[`code-line-container`]}
    >
      {children.map((item, index) => {
        const { element, typeOfCode, inlineSpacerValue } = item;
        console.log(item.hasOwnProperty("element"));

        return (
          <span
            data-typeofjscode={typeOfCode}
            data-typeofinlinespacer={inlineSpacerValue}
            className={CodeLineStyles[`js-code`]}
            key={Math.random() * index}
          >
            {element}
          </span>
        );
      })}
      {/* {children.map((item, index) => {
        const { element, typeOfCode, spacerValue } = item;
        console.log(item.hasOwnProperty("element"));

        return !item.hasOwnProperty("element") ? (
          <span
            data-typeofbracket={item.props["data-bracket"]}
            data-typeofspacer={item.props[`data-spacer`]}
            className={CodeLineStyles[`js-code`]}
            key={Math.random() * index}
          >
            {item.props.children}
          </span>
        ) : (
          <span
            data-typeofjscode={typeOfCode}
            data-typeofspacer={spacerValue}
            className={CodeLineStyles[`js-code`]}
            key={Math.random() * index}
          >
            {element}
          </span>
        );
      })} */}
    </span>
  );
}
