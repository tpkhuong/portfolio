import React from "react";
import SnippetStyles from "./Snippet.module.css";
import { MdRefresh } from "react-icons/md";
import CodeBlock from "./CodeBlock/index";

export default function Snippet({ children, ...props }) {
  const memoizedInitialValues = React.useMemo(() => {
    return {
      codeBlockIndex: 0,
      arrayOfSnippetObj: [
        { title: "FirstTitle" },
        { title: "SecondTitle" },
        { title: "ThirdTitle" },
        { title: "FourthTitle" },
        { title: "FifthTitle" },
      ],
    };
  }, []);

  const [{ codeBlockIndex, arrayOfSnippetObj }, setTest] = React.useState(
    memoizedInitialValues
  );
  return (
    <div className={SnippetStyles[`snippet-container`]}>
      {/* tab */}
      <div className={SnippetStyles[`tab-container`]}>
        {/* inline-end border */}
        <h2>Load New Code Snippet</h2>
        <button
          data-isrefreshclicked="false"
          className={SnippetStyles[`tab-close-btn`]}
          onClick={(event) => {
            if (event.target.closest("BUTTON")) {
              event.target
                .closest("BUTTON")
                .setAttribute("data-isrefreshclicked", "true");
              console.log(codeBlockIndex);
              if (codeBlockIndex == 4) {
                console.log(codeBlockIndex);
                setTest((preValues) => {
                  return {
                    ...preValues,
                    codeBlockIndex: 0,
                  };
                });
                return;
              }
              console.log(codeBlockIndex);
              setTest((preValues) => {
                return {
                  ...preValues,
                  codeBlockIndex: codeBlockIndex + 1,
                };
              });
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
      <div className={SnippetStyles[`snippet-content-container`]}>
        {/* instructions */}
        {/* our solution */}
        <h3>{arrayOfSnippetObj[codeBlockIndex].title}</h3>
        <CodeBlock selectedIndex={codeBlockIndex}></CodeBlock>
        <span>_testTitle</span>
        <span>[[3],[1, 2, 3],</span>
        <span>[4, 5, 6],</span>
        <span>[9, 8, 9]]</span>
        {/* <CodeLine testAttr={testObj}>
          {testObj.first}
        </CodeLine> */}
        {/* {{
            element: "function",
            typeOfCode: "obj-dot-access",
            spacerValue: "inline-end",
          }}
          {{
            element: "const",
            typeOfCode: "string",
            spacerValue: "inline-end",
          }}
          {{ element: ";", typeOfCode: "operator", spacerValue: "inline" }}
          {{
            element: "=",
            typeOfCode: "operator",
            spacerValue: "inline-start",
          }}
          {{
            element: "{",
            typeOfCode: "operator",
            spacerValue: "inline-start",
          }}
          {{
            element: "(",
            typeOfCode: "operator",
            spacerValue: "inline-start",
          }}
          {{
            element: "]",
            typeOfCode: "operator",
            spacerValue: "inline-start",
          }} */}
        {/* <span data-spacer="inline" data-bracket="curly">
            &#123;
          </span>
          <span data-spacer="inline" data-bracket="array">
            &#93;
          </span>
          <span data-spacer="inline" data-bracket="parentheses">
            &#41;
          </span> */}
        {/* <CodeLine>{testObj.second}</CodeLine> */}
        {/* <div>
          <div className={SnippetStyles[`challenge-container`]}>
            <h3>challenge</h3>
          </div>
          <div className={SnippetStyles[`code-container`]}>
            <h3>solution</h3>
            <div className={SnippetStyles[`code`]}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti quidem laboriosam, molestiae amet delectus sit ipsam
                laudantium, optio non necessitatibus neque dolorum iure sunt,
                enim explicabo consequatur illum deleniti nulla. Voluptatum ab,
                doloremque soluta eaque veniam provident autem unde accusantium
                obcaecati. Tempora ut rem vitae reiciendis, voluptatibus, ipsam
                delectus accusamus repudiandae esse voluptatem similique
                eveniet, a autem ducimus provident corporis. Optio facilis
                distinctio earum ab reiciendis sit recusandae quidem aspernatur,
                pariatur nihil accusamus voluptatum tenetur, dolorem ipsa
                accusantium eum quod molestias cupiditate fuga odit
                necessitatibus. Libero possimus dolor illo aliquam. Ex
                asperiores velit vitae ea vel deleniti maiores, totam, facere
                facilis nisi veritatis? Quisquam tenetur id unde officia a iusto
                veritatis. Magni, rerum error! Repellat suscipit laborum iste
                delectus enim? Quidem, praesentium debitis vel magni nobis
                libero quisquam quibusdam quam officiis in quos iusto saepe
                inventore porro dignissimos, dolores aliquid id, quod veniam
                obcaecati quae molestiae similique necessitatibus! Error, iure!
                Perspiciatis expedita sapiente iure soluta aut saepe tenetur ea
                sunt facilis consequatur provident ducimus, non dolor veritatis
                sint earum odit, nulla officia praesentium? Fugit inventore esse
                molestiae odio similique delectus? Sint ad soluta architecto
                quos eius fugiat, iste quia ipsum eveniet doloremque temporibus
                assumenda perferendis, voluptates iure ipsa distinctio voluptas,
                similique nobis nulla dolorum ducimus? Aliquid omnis molestias
                nostrum dolores! Alias repellat, impedit nobis atque libero
                placeat ipsa, natus quae non at dolor? Quas aliquam perspiciatis
                earum. Dolores delectus quae nostrum. Sed eaque eius debitis
                asperiores autem numquam facilis vero? Reprehenderit, dolorum.
                Rem aliquid corrupti laudantium repudiandae, dolores vero
                numquam, debitis, quaerat natus iste aut quibusdam saepe
                eligendi a error autem temporibus reiciendis culpa tempore
                deserunt. Eos beatae ipsum earum. Explicabo, non modi, ab
                architecto velit dolores excepturi illum praesentium accusantium
                inventore, totam repellendus soluta veniam dolorem sequi enim
                quae
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

function CodeLine({ children, testAttr }) {
  console.log(testAttr);
  return (
    <div>
      {children.map((item, index) => {
        const { element, typeOfCode, spacerValue } = item;
        console.log(item.hasOwnProperty("element"));

        return !item.hasOwnProperty("element") ? (
          <span
            data-typeofbracket={item.props["data-bracket"]}
            data-typeofspacer={item.props[`data-spacer`]}
            className={SnippetStyles[`js-code`]}
            key={Math.random() * index}
          >
            {item.props.children}
          </span>
        ) : (
          <span
            data-typeofjscode={typeOfCode}
            data-typeofspacer={spacerValue}
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
