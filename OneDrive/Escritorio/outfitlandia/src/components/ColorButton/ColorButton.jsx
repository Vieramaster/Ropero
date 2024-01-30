import "./ColorButton.css";
import PropTypes from "prop-types";

const ColorButton = ({ color, name, onClick }) => {
  return (
        <button
        className="btn-box--color-btn"
        style={{ backgroundColor: color }}
        aria-label={name}
        id={name}
        onClick={onClick}
        />
  );
};

ColorButton.protoTypes = { 

    color : PropTypes.string.isRequired,
    name  : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
}

export default ColorButton


