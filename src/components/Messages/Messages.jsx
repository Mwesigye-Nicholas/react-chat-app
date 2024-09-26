import ScrollToBottom from "react-scroll-to-bottom";
import PropTypes from "prop-types";
import "./Messages.css";
import Message from "../Message/Message";
function Messages({ messages, name }) {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>{<Message message={message} name={name} />}</div>
      ))}
    </ScrollToBottom>
  );
}
Messages.propTypes = {
  messages: PropTypes.array,
  name: PropTypes.string,
};

export default Messages;
