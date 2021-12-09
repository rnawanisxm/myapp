import React, { useState, useEffect } from "react";

import countries from 'i18n-iso-countries';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const Weather = (props) => {
    const [apiData, setData] = useState([]);
    const apiKey = "49627141a23349fe2f53c1d5ebfc1c77";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.loc}&appid=${apiKey}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((apiData) => setData(apiData));
    }, [apiUrl]);

    const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };


    const icon = 'http://openweathermap.org/img/w/${apiData.weather[0].icon}.png'

    /*used for testing of random weather data
    if(props.loc){
        console.log(apiData)
    }*/


    return (
        <>

            {apiData.main ? (
            <div className="container-weather">
                <h2 className="location">
                    {props.loc}
                    <div className="country">

                        {countries.getName(apiData.sys.country, 'en', {
                            select: 'official',
                        })}

                    </div>
                </h2>
                <div className="container-bottom">
                    <div className="weather_image">
                        
                            <img
                                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`} className="w_image"
                                alt="weather status icon"

                            />
                    </div>
                    <div className="caption">{apiData.weather[0].main}</div>
                    <h1 className="temp">{kelvinToFarenheit(apiData.main.temp)}&deg;C</h1>
                </div>


            </div>
            ) : (
                <p> Loading</p>
            )}




        </>
    )
}
export default Weather;