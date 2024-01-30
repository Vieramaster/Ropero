import "./clothing-btn.css"

function ClothingBtn({ src, name, css, garment, nameBtn, onClick}) {
  
  
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
}

export default ClothingBtn;