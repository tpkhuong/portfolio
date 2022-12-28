import React from "react";
import InputsStyles from "./MessageInputs.module.css";

export default function MessageInputs({ children }) {
  return (
    <form role="form" className={InputsStyles[`inputs-sent-message-container`]}>
      {/* inputs */}
      <div className={InputsStyles[`label-input-container`]}>
        <label htmlFor="name">_name:</label>
        <input id="name" type="text" />
      </div>
      <div className={InputsStyles[`label-input-container`]}>
        <label htmlFor="email">_email:</label>
        <input id="email" type="text" />
      </div>
      <div className={InputsStyles[`label-input-container`]}>
        <label htmlFor="message">_message:</label>
        <textarea
          name="user-message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <button
          className={InputsStyles[`submit-btn`]}
          aria-label="submit message"
        >
          submit-message
        </button>
        {/* modal container */}
      </div>
      {/* sent message */}
    </form>
  );
}

function SentMessageModal({ children }) {
  return (
    <div className={InputsStyles[`sent-message-modal-container`]}>
      {/* modal */}
      <div role="dialog" aria-modal="true" aria-labelledby="sent-message-modal">
        <h2 className="visually-hidden">Message Sent</h2>
        <h2 className={InputsStyles[`title`]}>Thank You!</h2>
        <p className={InputsStyles[`description`]}>
          Your message has been accepted. You will recieve answer really soon!
        </p>
        <button className={InputsStyles[`new-message-btn`]} role="button">
          send-new-message
        </button>
      </div>
    </div>
  );
}
