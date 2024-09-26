import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
import PropTypes from "prop-types";
import "./InfoBar.css";
function InfoBar({room}) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
              <img src={onlineIcon} alt="online Icon" className="onlineIcon" />
              <h1>{ room }</h1>
      </div>
          <div className="rightInnerContainer">
              <a href="/"><img src={closeIcon} alt="close Icon" /></a>
      </div>
    </div>
  );
}

InfoBar.propTypes = {
    room: PropTypes.string.isRequired
}

export default InfoBar;
