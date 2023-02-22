import React, {useEffect, useState } from 'react';
import { properties } from '../../config/properties';
import "./../../css/Cities.css"
export function Cities() {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(undefined);
    const [loading, setLoading] = useState(false);



    function searchWeather() {
        setLoading(true)
        fetch(`${properties.api.weatherApi.root}/weather?q=${city}&units=metric&APPID=${properties.api.weatherApi.key}`)
            .then(res => res.json())
            .then(json => {
                if (json.cod !== "404") {
                    setLoading(false);
                    setWeather(json);
                    setCity('');

                }
                else {
                    setLoading(false)
                    setWeather(undefined);
                    alert(`Error: ${json.message}\nCheck your spelling and try again`);
                }
            })
            .catch(err => {
                setLoading(false)
                setWeather(undefined);
                alert(err)
            })
        // axios({
        //     url:`${api.base}/weather?q=${city}&units=metric&APPID=${api.key}`,
        //     method:'GET'
        // })
        // .then(res=>{
        //     setLoading(false)
        //     setWeather(res.data);
        //     setCity('')

        // })
        // .catch(err=>{
        //     setLoading(false)
        //     alert(err)
        // })
    }

    function dateBuilder(datum) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
        let day = days[datum.getDay()]; //Wednesday
        let date = datum.getDate();         //28
        let month = months[datum.getMonth()] //September
        let year = datum.getFullYear();     //2022
        return `${day} ${date} ${month} ${year}`
    }

    useEffect(() => {
        console.log(weather)
    }, [weather])
    return (
        <div className={weather ? (weather.main.temp > 15) ? "cities warm" : "cities cold" : 'cities'}>
            <div className="search-box"> 
                <input
                    type="text"
                    placeholder="Search Cities"
                    className="search-bar"
                    value={city}
                    onChange={e => { setCity(e.target.value) }}
                />
                <button onClick={searchWeather} className="search-button">
                    Search
                </button>
            </div>
            {weather && loading === false &&
                <div className="location-container">
                    <div className="location-box">
                        <div className="location">
                            {weather.name}, {weather.sys.country}
                        </div>
                        <div className="date">
                            {dateBuilder(new Date())}
                        </div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)} &#8451;
                        </div>
                        <div className="weather">
                            {weather.weather[0].main}
                        </div>
                    </div>
                </div>}
            {loading && <div className="loader"></div>}
        </div>
    )
}
