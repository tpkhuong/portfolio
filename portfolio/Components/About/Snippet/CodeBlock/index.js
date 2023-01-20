import React from "react";
import CodeBlockStyles from "./CodeBlock.module.css";
import ReverseString from "./CodeExample/ReverseString";
import Includes from "./CodeExample/Includes";

export default function CodeBlock({ children, selectedIndex }) {
  return (
    <React.Fragment>
      <pre className={CodeBlockStyles[`code-bg`]}>
        {/* render code block based on props passed to CodeBlock Component */}
        {selectedIndex == 0 ? <ReverseString /> : null}
        {selectedIndex == 1 ? <Includes /> : null}
        {selectedIndex == 2 ? "Intersections" : null}
        {selectedIndex == 3 ? "Binary Search" : null}
        {selectedIndex == 4 ? "Merge Sort" : null}
      </pre>
    </React.Fragment>
  );
}
