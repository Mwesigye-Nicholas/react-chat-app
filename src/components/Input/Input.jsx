import "./Input.css";
import PropTypes from "prop-types";

function Input({ message, setMessage, sendMessage}) {
  return (
    <form className="form">
          <input
              placeholder="Enter a message..."
        type="text"
        className="input"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
          />
          <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
  );
}

Input.propTypes = {
    message: PropTypes.string.isRequired,
    setMessage: PropTypes.func,
    sendMessage: PropTypes.func

};

export default Input;
