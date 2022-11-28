import React from "react";
import SnippetStyles from "./Snippet.module.css";
import { MdRefresh } from "react-icons/md";

export default function Snippet({ children, ...props }) {
  return (
    <div className={SnippetStyles[`snippet-container`]}>
      {/* tab */}
      <div className={SnippetStyles[`tab-container`]}>
        {/* inline-end border */}
        <span>Load Code Snippet</span>
        <button
          data-isrefreshclicked="false"
          className={SnippetStyles[`tab-close-btn`]}
          onClick={(event) => {
            if (event.target.closest("BUTTON")) {
              event.target
                .closest("BUTTON")
                .setAttribute("data-isrefreshclicked", "true");
            }
            setTimeout(() => {
              event.target
                .closest("BUTTON")
                .getAttribute("data-isrefreshclicked") == "true"
                ? event.target
                    .closest("BUTTON")
                    .setAttribute("data-isrefreshclicked", "false")
                : null;
            }, 1050);
          }}
        >
          <MdRefresh className={SnippetStyles[`tab-icon`]} />
        </button>
      </div>
      {/* content */}
      <div className={SnippetStyles[`snippet-container`]}>
        {/* instructions */}
        {/* our solution */}
        <TestComponent>
          {{ element: "var", typeOfCode: "hello" }}
          {{ element: "const", typeOfCode: "world" }}
          {{ element: ";", typeOfCode: "semi-colon" }}
          {{ element: "=", typeOfCode: "assign-opr" }}
          <span data-bracket="curly" id="hello">
            &#123;
          </span>
        </TestComponent>
      </div>
    </div>
  );
}

function TestComponent({ children }) {
  return (
    <div>
      {children.map((item, index) => {
        const { element, typeOfCode } = item;
        console.log(item.hasOwnProperty("element"));
        const copyObj = !item.hasOwnProperty("element")
          ? { ...item.props }
          : null;
        if (copyObj) {
          console.log(copyObj["data-bracket"]);
          console.log(copyObj.children);
        }

        return !item.hasOwnProperty("element") ? (
          <span
            data-typeofbracket={copyObj["data-bracket"]}
            className={SnippetStyles[`js-code`]}
            key={Math.random() * index}
          >
            {copyObj.children}
          </span>
        ) : (
          <span
            data-typeofjscode={`${typeOfCode}`}
            className={SnippetStyles[`js-code`]}
            key={Math.random() * index}
          >
            {element}
          </span>
        );
      })}
    </div>
  );
}
