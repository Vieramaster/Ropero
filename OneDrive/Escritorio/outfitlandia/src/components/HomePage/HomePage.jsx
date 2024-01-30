import "./HomePage.css"
import SelectionClothes from "../SelectionClothes/SelectionClothes"
import SelectionGarment from "../SelectionGarment/SelectionGarment"
import Weather from "../Weather/Weather"

const HomePage = () =>{

    return(
        <section className="homePage">
        <div className="box">
          <SelectionGarment/>
          <Weather/>
          <SelectionClothes/>

        </div>
      </section>
    )
}

export default HomePage