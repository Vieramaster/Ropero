import "./color-btn.css";

function ColorBtn({ color, name, onClick }) {
  return (
    <button
      className="btn-box--color-btn"
      style={{ backgroundColor: color }}
      aria-label={name}
      id={name}
      onClick={onClick}
    />
  );
}

export default ColorBtn;
