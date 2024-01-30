import "./clothes selection.css";
import ClothingBtn from "../clothing-btn/clothing-btn";
import { useState } from "react";
import ColorBtn from "../color-btn/color-btn";

function ClothesSelection({ arrayGarment, updateGarmentCard }) {
  const [showBtn, setShowbtn] = useState(false);
  const [colors, setColors] = useState([]);
  const [arrayObjetNew, setArrayObjetNew] = useState([])

  //sustraer el id para buscar su par en el array entrante, y se dejan los colores, para despues poner condicional para ver que se muestra primero
  const idGarment = (e) => {
    const result = e.currentTarget.id;
    const arrayObjet = arrayGarment.filter((item) => item.name === result);
    setArrayObjetNew(arrayObjet)
    const garmentClothes = arrayObjet.map((item) => item.colors).flat();
    setColors(garmentClothes)
 
    setShowbtn(true);
  };
  //sustrae el url de la imagen del color seleccionado

 const imageColor = (e) => {
  const colorName = e.currentTarget.id;
  const filtername = colors.filter(item => item.colorName === colorName)

  const filterImg = filtername[0].imgColor;

  const newGarment = arrayObjetNew.map(item=>{
    if(item.img){
      return { ...item, img: filterImg };
    }
    return item;
  });
  
  updateGarmentCard(newGarment)

  // hay 2 objetos guardados filterImg que es la imagen del color y el otro arrayColorBtn que son las caracteristicas de la ropa

 }

  return (
    <div className="clothes-selection">
      <div className="clothes-selection--box">
        {!showBtn &&
          arrayGarment.map((item) => (
            <ClothingBtn
              onClick={idGarment}
              css={item.css}
              src={item.img}
              key={item.name}
              garment={item.name}
              nameBtn={item.name}
            />
          ))}
        <div className="clothes-selection--btn">
          {showBtn &&
            colors.map((item, index) => {
              return (
                <ColorBtn color={item.hex} 
                name={item.colorName} 
                key={index} 
                onClick={imageColor}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ClothesSelection;