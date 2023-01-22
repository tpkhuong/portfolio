import React from "react";
import CodeBlockStyles from "./CodeBlock.module.css";
import ReverseString from "./CodeExample/ReverseString";
import Includes from "./CodeExample/Includes";
import Intersection from "./CodeExample/Intersection";
import BinarySearch from "./CodeExample/BinarySearch";
import MergeSort from "./CodeExample/MergeSort";

export default function CodeBlock({ children, selectedIndex }) {
  return (
    <React.Fragment>
      <pre className={CodeBlockStyles[`code-bg`]}>
        {/* render code block based on props passed to CodeBlock Component */}
        {selectedIndex == 0 ? <ReverseString /> : null}
        {selectedIndex == 1 ? <Includes /> : null}
        {selectedIndex == 2 ? <Intersection /> : null}
        {selectedIndex == 3 ? <BinarySearch /> : null}
        {selectedIndex == 4 ? <MergeSort /> : null}
      </pre>
    </React.Fragment>
  );
}
