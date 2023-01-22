import React from "react";
import SnippetStyles from "./Snippet.module.css";
import { MdRefresh } from "react-icons/md";
import CodeBlock from "./CodeBlock/index";

export default function Snippet({ children, ...props }) {
  const memoizedInitialValues = React.useMemo(() => {
    return {
      codeBlockIndex: 0,
      arrayOfSnippetObj: [
        {
          title: "_ReverseString",
          description: "_Instructions:",
          textContent:
            "Write a function, reverseString,  that reverses a string and returns it. The string to reverse is given as an argument in the function.",
          exmaple: {
            title: "_Example:",
            content: [
              "reverseString('hello') should returns 'olleh'.",
              "reverseString('Howdy') should returns 'ydwoH'.",
              "reverseString('Greetings from Earth') should returns 'htraE morf sgniteerG'.",
            ],
          },
          codeBlockTitle: "_Solution:",
        },
        {
          title: "_JavaScript Array includes",
          description: "_Instructions:",
          textContent:
            "The includes() method returns true if an array contains a specified value. The includes() method returns false if the value is not found. Write a function that takes in an array and value, return true if the array contains the value else return false.",
          exmaple: {
            title: "_Example:",
            content: [
              "includes([1,2,3,4,5], 5) returns true",
              "includes(['apple','orange','melo'], 'berry') returns false",
              "includes(['red','blue','white'], 'blue') returns true",
            ],
          },
          codeBlockTitle: "_Solution:",
        },
        {
          title: "_Intersection",
          description: "_Instructions:",
          textContent:
            "Construct a function intersection that take in arrays as values and compares the arrays and returns a new array with elements found in all of the arrays passed into the function call.",
          exmaple: {
            title: "_Example:",
            content: [
              "intersection([5, 10, 15,5,15, 20], [15, 88, 1, 5, 7,15,5], [15,5,1, 10, 15, 5, 20,15]).",
              "returns [5, 15]",
            ],
          },
          codeBlockTitle: "_Solution:",
        },
        {
          title: "_BinarySearch",
          description: "_Instructions:",
          textContent:
            "Given a sorted array of n elements, write a function that accepts an array and the search value to search a given element x in array and return the index of x in the array. Consider array is 0 base index.",
          exmaple: {
            title: "_Example:",
            content: [
              "binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 110) returns 6",
              "binarySearch([10, 20, 30, 40, 60, 110, 120, 130, 170], 175) returns -1",
            ],
          },
          codeBlockTitle: "_Solution:",
        },
        {
          title: "_MergeSort",
          description: "_Instructions:",
          textContent:
            "Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge.",
          exmaple: {
            title: "_Example:",
            content: [
              "mergeSort([12, 34, 11, 1, 54, 25, 67, 45])",
              "returns [1, 11, 12, 25, 34, 45, 54, 67]",
            ],
          },
          codeBlockTitle: "_Solution:",
        },
      ],
    };
  }, []);

  const [{ codeBlockIndex, arrayOfSnippetObj }, setTest] = React.useState(
    memoizedInitialValues
  );

  React.useEffect(() => {
    // const scrollWatcher = debounce(function watchStuff() {
    //   console.log(isScrolledIntoView(document.getElementById("selectors")));
    // }, 800);
    // window.addEventListener("scroll", scrollWatcher);
    // return function remove() {
    //   window.removeEventListener("scroll", scrollWatcher);
    // };
  }, []);

  return (
    <div className={SnippetStyles[`snippet-container`]}>
      {/* tab */}
      <div id="selectors" className={SnippetStyles[`tab-container`]}>
        {/* inline-end border */}
        <h2>Load New Code Snippet</h2>
        <button
          data-isrefreshclicked="false"
          role="button"
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
        <div className={SnippetStyles[`instructions-container`]}>
          <h3
            className={`${SnippetStyles[`challenge-title`]} ${
              SnippetStyles[`white-text`]
            }`}
          >
            {arrayOfSnippetObj[codeBlockIndex].title}:
          </h3>
          <h4 className={SnippetStyles[`sub-title`]}>
            {arrayOfSnippetObj[codeBlockIndex].description}
          </h4>
          <p>{arrayOfSnippetObj[codeBlockIndex].textContent}</p>
          <h4 className={SnippetStyles[`example-title`]}>
            {arrayOfSnippetObj[codeBlockIndex].exmaple.title}
          </h4>
          <div className={SnippetStyles[`exmaple-container`]}>
            {arrayOfSnippetObj[codeBlockIndex].exmaple.content.map(
              function makeText(item, index) {
                return <p key={Math.random() * index}>{item}</p>;
              }
            )}
          </div>
        </div>
        {/* our solution */}
        <div className={SnippetStyles[`solution-container`]}>
          <h4
            className={`${SnippetStyles[`sub-title`]} ${
              SnippetStyles[`white-text`]
            }`}
          >
            {arrayOfSnippetObj[codeBlockIndex].codeBlockTitle}
          </h4>
          <CodeBlock selectedIndex={codeBlockIndex}></CodeBlock>
        </div>
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

function isScrolledIntoView(element) {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;

  const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

  return isVisible;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
