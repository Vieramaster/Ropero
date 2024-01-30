import './weather.css'

function Weather(){

    return(
        <div className="weather-box">
            <div className='weather-box--info'>
                <img src="/src/images/09d.svg" alt="" />
            </div>
            <div className='weather-box--info'>
                <p>14.3 °C</p>
            </div>
            <div className='weather-box--info winter'>
                <img src="/src/images/wind.svg" alt="" />
                <span>12km/h</span>
            </div>
        </div>
        
    )
}


export default Weather

