import React from "react";
import DisplayStyles from "./MessageDisplay.module.css";
import { currentDate } from "./messageDisplayHelpers";

export default function MessageDisplay({ children }) {
  React.useEffect(()=>{
    console.log(currentDate);
  },[]);
  return (
    <div className={DisplayStyles[`message-display-container`]}>
      <p className={DisplayStyles[`code-line`]} data-linenumber="1"> 
        <span className={`${DisplayStyles[`const-obj-prop`]} ${DisplayStyles[`margin-inline-end`]}`}>const</span>
        <span className={`${DisplayStyles[`variable`]} ${DisplayStyles[`margin-inline-end`]}`}>button</span>
        <span className={DisplayStyles[`margin-inline-end`]}>=</span>
        <span className={DisplayStyles[`document-button-form`]}>document</span>
        <span>.</span>
        <span className={DisplayStyles[`variable`]}>querySelector</span>
        <span className={DisplayStyles[`parentheses`]}>(</span>
        <span className={DisplayStyles[`selector-property-content`]}>"#sendBtn"</span>
        <span className={DisplayStyles[`parentheses`]}>)</span>
        <span>;</span>
      </p>
      <p data-linenumber="2" aria-hidden="true" className={DisplayStyles[`code-line`]}>
         <span className={DisplayStyles[`hide`]}>spacer</span>
         </p>
      <p className={DisplayStyles[`code-line`]} data-linenumber="3"> 
        <span className={`${DisplayStyles[`const-obj-prop`]} ${DisplayStyles[`margin-inline-end`]}`}>const</span>
        <span className={`${DisplayStyles[`variable`]} ${DisplayStyles[`margin-inline-end`]}`}>message</span>
        <span className={DisplayStyles[`margin-inline-end`]}>=</span>
        <span className={DisplayStyles[`curly`]}>&#123;</span>
      </p>
      <p className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]} ${DisplayStyles[`margin-block-start-start`]}`} data-linenumber="4"> 
        <span className={DisplayStyles[`const-obj-prop`]}>name</span>
        <span className={DisplayStyles[`margin-inline-end`]}>:</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span id="name-content" className={DisplayStyles[`selector-property-content`]}>Hi, Awesome Person. Enter your name</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span>,</span>
      </p>
      <p className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]} ${DisplayStyles[`margin-block-start-start`]}`} data-linenumber="5"> 
        <span className={DisplayStyles[`const-obj-prop`]}>email</span>
        <span className={DisplayStyles[`margin-inline-end`]}>:</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span id="email-content" className={DisplayStyles[`selector-property-content`]}>youareloved@byeveryone.com</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span>,</span>
      </p>
      <p className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]} ${DisplayStyles[`margin-block-start-start`]}`} data-linenumber="6"> 
        <span className={DisplayStyles[`const-obj-prop`]}>message</span>
        <span className={DisplayStyles[`margin-inline-end`]}>:</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span id="message-content" className={DisplayStyles[`selector-property-content`]}>Enjoy your day!!!</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span>,</span>
      </p>
      <p className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]} ${DisplayStyles[`margin-block-start-start`]}`} data-linenumber="7"> 
        <span className={DisplayStyles[`const-obj-prop`]}>date</span>
        <span className={DisplayStyles[`margin-inline-end`]}>:</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span id="date-content" className={DisplayStyles[`selector-property-content`]}>{currentDate}</span>
        <span className={DisplayStyles[`quote`]}>"</span>
      </p>
      <p className={`${DisplayStyles[`curly`]} ${DisplayStyles[`code-line`]} ${DisplayStyles[`margin-block-start-start`]}`} data-linenumber="8">&#125;</p>
      <p data-linenumber="9" aria-hidden="true" className={DisplayStyles[`code-line`]}>
        <span className={DisplayStyles[`hide`]}>spacer</span>
        </p>
      <p className={DisplayStyles[`code-line`]} data-linenumber="10" >
        <span className={DisplayStyles[`document-button-form`]}>button</span>
        <span>.</span>
        <span className={DisplayStyles[`variable`]}>addEventListener</span>
        <span className={DisplayStyles[`parentheses`]}>(</span>
        <span className={DisplayStyles[`selector-property-content`]}>"click"</span>
        <span className={DisplayStyles[`parentheses`]}>)</span>
        <span className={DisplayStyles[`margin-inline-end`]}>,</span>
        <span className={DisplayStyles[`parentheses`]}>(</span>
        <span className={DisplayStyles[`white-text`]}>event</span>
        <span className={`${DisplayStyles[`parentheses`]} ${DisplayStyles[`margin-inline-end`]}`}>)</span>
        <span className={DisplayStyles[`const-obj-prop`]}>=</span>
        <span className={`${DisplayStyles[`const-obj-prop`]} ${DisplayStyles[`margin-inline-end`]}`}>&gt;</span>
        <span className={DisplayStyles[`curly`]}>&#123;</span>
      </p>
      <p className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]} ${DisplayStyles[`margin-block-start-start`]}`} data-linenumber="11" >
        <span className={DisplayStyles[`document-button-form`]}>form</span>
        <span>.</span>
        <span className={DisplayStyles[`variable`]}>send</span>
        <span className={DisplayStyles[`parentheses`]}>(</span>
        <span className={DisplayStyles[`white-text`]}>message</span>
        <span className={DisplayStyles[`parentheses`]}>)</span>
        <span>;</span>
      </p>
      <p className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`margin-block-start-start`]}`} data-linenumber="12">
        <span className={DisplayStyles[`curly`]}>&#125;</span>
        <span className={DisplayStyles[`parentheses`]}>)</span>
        <span>;</span>
      </p>
    </div>
  );
}

// ${DisplayStyles[`margin-inline-end`]}