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
      <div className={SnippetStyles[`snippet-container`]}></div>
    </div>
  );
}
