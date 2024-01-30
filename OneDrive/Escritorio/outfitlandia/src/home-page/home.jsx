import React, { useState, useEffect } from "react";
import "../home-page/home.css";
import Inventory from "./inventory/inventory";
import Weather from "./weather/weather";
import ClothesSelection from "./clothes-selection/clothes selection";


function Home() {
  const [garment, setGarment] = useState("");
  const [data, setData] = useState([]);
  const [newGarmentCard, setNewGarmentCard] = useState(null);

  //se agrega el JSON para la data
  useEffect(() => {
    fetch("./redata.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

    // sustraigo el id de los botones que me otorga inventory
  const addName = (val) => {
    setGarment(val);
  };
  // uso el id para buscar su igual en el array y para mandarlo al otro hijo clothesselection
  let dataFilter = data ? data.filter((item) => item.garment === garment) : [];



  return (
    <section className="homePage">
      <div className="box">
        <Inventory addName={addName} newGarmentCard={newGarmentCard}/>
        <Weather />
        <ClothesSelection arrayGarment = {dataFilter} updateGarmentCard ={setNewGarmentCard}/>

      </div>
    </section>
  );
}

export default Home;
