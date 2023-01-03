import React from "react";
import InputsStyles from "./MessageInputs.module.css";

export default function MessageInputs({ children }) {
  const [showModal, setModalState] = React.useState(false);
  return (
    <div className={InputsStyles[`inputs-modal-container`]}>
      <form
        role="form"
        data-showmodal="false"
        id="inputs-form"
        className={InputsStyles[`inputs-sent-message-container`]}
      >
        {/* inputs */}
        <div className={InputsStyles[`label-input-container`]}>
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
          Your message has been accepted. You will receive answer really soon!
        </p>
        <button
          onClick={(event) => {
            console.log(hideModalFuncObj.showModal);
            console.log(hideModalFuncObj.setModalState);
            if (hideModalFuncObj.showModal) {
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
