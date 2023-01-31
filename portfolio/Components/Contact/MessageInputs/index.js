import React from "react";
import InputsStyles from "./MessageInputs.module.css";
import { updateMessageDisplayContent } from "../MessageDisplay/messageDisplayHelpers";

export default function MessageInputs({ children }) {
  const [showModal, setModalState] = React.useState(false);
  React.useEffect(() => {
    // name
    const nameDisplay = updateMessageDisplayContent.bind({
      contentElement: document.getElementById("name-content"),
    });
    // email
    const emailDisplay = updateMessageDisplayContent.bind({
      contentElement: document.getElementById("email-content"),
    });
    // message
    const messageDisplay = updateMessageDisplayContent.bind({
      contentElement: document.getElementById("message-content"),
    });

    document.getElementById("name").addEventListener("keyup", nameDisplay);
    document.getElementById("email").addEventListener("keyup", emailDisplay);
    document
      .getElementById("message")
      .addEventListener("keyup", messageDisplay);
  }, []);
  return (
    <div className={InputsStyles[`inputs-modal-container`]}>
      <form
        role="form"
        data-showmodal="false"
        id="inputs-form"
        className={InputsStyles[`inputs-sent-message-container`]}
      >
        {/* inputs */}
        <div
          className={`${InputsStyles[`label-input-container`]} ${
            InputsStyles[`min-width`]
          }`}
        >
          <label htmlFor="name">_name:</label>
          <input id="name" type="text" />
        </div>
        <div className={InputsStyles[`label-input-container`]}>
          <label htmlFor="email">_email:</label>
          <input id="email" type="text" />
        </div>
        <div
          className={`${InputsStyles[`label-input-container`]} ${
            InputsStyles[`margin-block-start-large`]
          }`}
        >
          <label htmlFor="message">_message:</label>
          <textarea name="" id="message" cols="30" rows="10"></textarea>
        </div>
        {/* sent message */}
        <div className={InputsStyles[`submit-clear-btns-container`]}>
          {/* submit */}
          <button
            type="button"
            onClick={(event) => {
              if (!showModal) {
                // hide form
                document
                  .getElementById("inputs-form")
                  .getAttribute("data-showmodal") == "false"
                  ? document
                      .getElementById("inputs-form")
                      .setAttribute("data-showmodal", "true")
                  : null;
                // reset input to empty strings
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                // show modal
                setModalState(true);
                return;
              }
            }}
            className={InputsStyles[`submit-btn`]}
            aria-label="submit message"
          >
            submit-message
          </button>
          {/* clear */}
          <button
            onClick={(event) => {
              // reset inputs and display message to default
              // name
              document.getElementById("name").value = "";
              document.getElementById("name-content").innerText =
                "Hi, Awesome Person. Enter your name";
              // email
              document.getElementById("email").value = "";
              document.getElementById("email-content").innerText =
                "youareloved@byeveryone.com";
              // message
              document.getElementById("message").value = "";
              document.getElementById("message-content").innerText =
                "Enjoy your day!!!";
            }}
            className={InputsStyles[`clear-btn`]}
            type="button"
            aria-label="clear inputs"
          >
            clear-inputs
          </button>
        </div>
        {/* add clear inputs btn */}
        {/* <div className={InputsStyles[`button-modal-container`]}>
        </div> */}
        {/* modal container */}
      </form>
      {showModal ? (
        <SentMessageModal hideModalFuncObj={{ showModal, setModalState }} />
      ) : null}
    </div>
  );
}

function SentMessageModal({ children, hideModalFuncObj }) {
  return (
    <div className={InputsStyles[`sent-message-modal-container`]}>
      {/* modal */}
      <div role="dialog" aria-modal="true" aria-labelledby="sent-message-modal">
        <h2 className="visually-hidden">Message Sent</h2>
        <h2 className={InputsStyles[`title`]}>Thank You!</h2>
        <p className={InputsStyles[`description`]}>
          Our algorithm for the submit button only make it SEEMS like the
          message is sent. However, clicking 'submit' does not send your message
          any where or to anyone. Have a great day!!!
        </p>
        <button
          onClick={(event) => {
            console.log(hideModalFuncObj.showModal);
            console.log(hideModalFuncObj.setModalState);
            if (hideModalFuncObj.showModal) {
              // reset message display to default
              document.getElementById("name-content").innerText =
                "Hi, Awesome Person. Enter your name";
              document.getElementById("email-content").innerText =
                "youareloved@byeveryone.com";
              document.getElementById("message-content").innerText =
                "Enjoy your day!!!";
              // show form
              document
                .getElementById("inputs-form")
                .getAttribute("data-showmodal") == "true"
                ? document
                    .getElementById("inputs-form")
                    .setAttribute("data-showmodal", "false")
                : null;
              // hide modal
              hideModalFuncObj.setModalState(false);
              return;
            }
          }}
          className={InputsStyles[`new-message-btn`]}
          role="button"
        >
          send-new-message
        </button>
      </div>
      <div className={InputsStyles} id="hello"></div>
    </div>
  );
}
