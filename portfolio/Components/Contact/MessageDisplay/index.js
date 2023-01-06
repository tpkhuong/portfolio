import React from "react";
import DisplayStyles from "./MessageDisplay.module.css";

export default function MessageDisplay({ children }) {
  
  // React.useEffect(()=>{
  //   document.getElementById("button").addEventListener("click", function doStuff(event){

  //   });
  // },[]);
  return (
    <div className={DisplayStyles[`message-display-container`]}>
      <p className={DisplayStyles[`code-line`]} data-linenumber="1"> 
        <span className={DisplayStyles[`const-obj-prop`]}>const</span>
        <span className={DisplayStyles[`variable`]}>button</span>
        <span className={DisplayStyles[``]}>=</span>
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
        <span className={DisplayStyles[`const-obj-prop`]}>const</span>
        <span className={DisplayStyles[`variable`]}>message</span>
        <span>=</span>
        <span className={DisplayStyles[`curly`]}>&#123;</span>
      </p>
      <p id="name-content" className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]}`} data-linenumber="4"> 
        <span className={DisplayStyles[`const-obj-prop`]}>name</span>
        <span>:</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span className={DisplayStyles[`selector-property-content`]}>hello</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span>,</span>
      </p>
      <p id="email-content" className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]}`} data-linenumber="5"> 
        <span className={DisplayStyles[`const-obj-prop`]}>email</span>
        <span>:</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span className={DisplayStyles[`selector-property-content`]}>world</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span>,</span>
      </p>
      <p id="message-content" className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]}`} data-linenumber="6"> 
        <span className={DisplayStyles[`const-obj-prop`]}>message</span>
        <span>:</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span className={DisplayStyles[`selector-property-content`]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ullam id consequuntur voluptates magni porro architecto voluptatum quo assumenda expedita deserunt vel repellendus qui sequi illum in? Impedit, ex vel?</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span>,</span>
      </p>
      <p id="date-content" className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]}`} data-linenumber="7"> 
        <span className={DisplayStyles[`const-obj-prop`]}>date</span>
        <span>:</span>
        <span className={DisplayStyles[`quote`]}>"</span>
        <span className={DisplayStyles[`selector-property-content`]}>hello world</span>
        <span className={DisplayStyles[`quote`]}>"</span>
      </p>
      <p className={`${DisplayStyles[`curly`]} ${DisplayStyles[`code-line`]}`} data-linenumber="8">&#125;</p>
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
        <span>,</span>
        <span className={DisplayStyles[`parentheses`]}>(</span>
        <span className={DisplayStyles[`white-text`]}>event</span>
        <span className={DisplayStyles[`parentheses`]}>)</span>
        <span className={DisplayStyles[`const-obj-prop`]}>=</span>
        <span className={DisplayStyles[`const-obj-prop`]}>&gt;</span>
        <span className={DisplayStyles[`curly`]}>&#123;</span>
      </p>
      <p className={`${DisplayStyles[`code-line`]} ${DisplayStyles[`padding-inline-start-medium`]}`} data-linenumber="11" >
        <span className={DisplayStyles[`document-button-form`]}>form</span>
        <span>.</span>
        <span className={DisplayStyles[`variable`]}>send</span>
        <span className={DisplayStyles[`parentheses`]}>(</span>
        <span className={DisplayStyles[`white-text`]}>message</span>
        <span className={DisplayStyles[`parentheses`]}>)</span>
        <span>;</span>
      </p>
      <p className={DisplayStyles[`code-line`]} data-linenumber="12">
        <span className={DisplayStyles[`curly`]}>&#125;</span>
        <span className={DisplayStyles[`parentheses`]}>)</span>
        <span>;</span>
      </p>
    </div>
  );
}
