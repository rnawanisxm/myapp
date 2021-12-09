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

    const unixToDate = (k, l) => {
        const date = new Date((l - k) * 1000);
        const month = (date.toLocaleDateString("en-US", { month: "short" }))

        return (date.toLocaleTimeString("en-US"));
    }

    const icon = 'http://openweathermap.org/img/w/${apiData.weather[0].icon}.png'

    /*used for testing of random weather data
    if(props.loc){
        console.log(apiData)
    }*/


    return (
        <>

            {apiData.main ? (<div class="container-weather">
                <h2 class="location">
                    {props.loc}
                    <div class="country">

                        {countries.getName(apiData.sys.country, 'en', {
                            select: 'official',
                        })}

                    </div>
                </h2>
                <div class="weather_image">
                    <figure>
                    <img
                        src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`} class="w_image"
                        alt="weather status icon"
                        
                    />
                    <figurecaption class = "caption">Hi</figurecaption>
                    </figure>
                    <h1 class="temp">{kelvinToFarenheit(apiData.main.temp)}&deg; C</h1>
                </div>
                

            </div>
            ) : (
                <p> Loading</p>
            )}


        </>
    )
}
export default Weather;