import "./ClothingButton.css";
import PropTypes from "prop-types";

const ClothingButton = ({ css, garment, onClick, src, nameBtn }) => {
  return (
    <button
      className={`clothing-Btn ${css}`}
      aria-label={nameBtn}
      id={garment}
      onClick={onClick}
    >
      <img src={src} />
    </button>
  );
};

ClothingButton.propTypes = {
  css: PropTypes.string.isRequired,
  garment: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  nameBtn: PropTypes.string.isRequired,
};

export default ClothingButton;
