import React from "react";
import SnippetStyles from "./Snippet.module.css";

export default function Snippet({ children, ...props }) {
  return (
    <div className={SnippetStyles[`snippet-container`]}>
      {/* tab */}
      {/* content */}
    </div>
  );
}
