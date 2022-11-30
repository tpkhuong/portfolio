import React from "react";
import CodeBlockStyles from "./CodeBlock.module.css";
import SolutionOne from "./CodeExample/solutionOne";

export default function CodeBlock({ children, selectedIndex }) {
  return (
    <React.Fragment>
      <pre className={CodeBlockStyles[`code-bg`]}>
        {/* render code block based on props passed to CodeBlock Component */}
        {selectedIndex == 0 ? <SolutionOne /> : null}
        {selectedIndex == 1 ? "SolutionTwo" : null}
        {selectedIndex == 2 ? "SolutionThree" : null}
        {selectedIndex == 3 ? "SolutionFour" : null}
        {selectedIndex == 4 ? "SolutionFive" : null}
      </pre>
    </React.Fragment>
  );
}
