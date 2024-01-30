import "./inventory.css";
import ClothingBtn from "../clothing-btn/clothing-btn";
import { useEffect, useState } from "react";

function Inventory({ addName, newGarmentCard }) {
  const [buttons, setButtons] = useState([
    {
      css: "big",
      src: "/src/images/default/top.webp",
      name: "default-top",
      garment: "top",
      nameBtn: "parte superior",
      key: "default-top",
    },
    {
      css: "big",
      src: "/src/images/default/coat.webp",
      name: "default-coat",
      garment: "coat",
      nameBtn: "abrigo",
      key: "default-coat",
    },
    {
      css: "big",
      src: "/src/images/default/pants.webp",
      name: "default-pants",
      garment: "pants",
      nameBtn: "pantalones",
      key: "default-pants",
    },
    {
      css: "small",
      src: "/src/images/default/necklace.webp",
      name: "default-necklace",
      garment: "necklace",
      nameBtn: "collar",
      key: "default-necklace",
    },
    {
      css: "small",
      src: "/src/images/default/watch.webp",
      name: "default-watch",
      garment: "watch",
      nameBtn: "reloj",
      key: "",
    },
    {
      css: "small",
      src: "/src/images/default/belt.webp",
      name: "default-belt",
      garment: "belt",
      nameBtn: "cinturón",
      key: "default-belt",
    },
    {
      css: "small",
      src: "/src/images/default/shoes.webp",
      name: "default-shoes",
      garment: "shoes",
      nameBtn: "calzado",
      key: "default-shoes",
    },
  ]);

  const handleClick = (e) => {
    addName(e.currentTarget.id);
  };

 useEffect(()=>{
    if(newGarmentCard){
      setButtons.map((item)=>{
        
      })
    }
 })


  return (
    <div className="inventory">
      {buttons.map((item) => {
        if (item.css === "big") {
          return (
            <div className="inventory--big">
              <ClothingBtn
                onClick={handleClick}
                css={item.css}
                src={item.src}
                key={item.key}
                garment={item.garment}
                nameBtn={item.nameBtn}
              />
            </div>
          );
        }
      })}
      <div className="inventory--small">
        {buttons.map((item) => {
          if (item.css === "small") {
            return (
              <ClothingBtn
                onClick={handleClick}
                css={item.css}
                src={item.src}
                key={item.key}
                garment={item.garment}
                nameBtn={item.nameBtn}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Inventory;



