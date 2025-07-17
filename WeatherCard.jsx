import React from "react";
const WeatherCard= () => {
    const CardStyle = {
        padding: '15px',
        borderRadius: '10px',
        backgroundColor: '#d3f3ff',
        color: '#003366',
        width: '250px',
        textAlign: 'center',
        boxShadow:'0 2px 5px rgba(0,0,0,0.2)',

    };
    return(
        <div><h1>Motiovational Quote</h1>
        <div className="quote-box">
            <p >All is Well</p>
            
             </div>
            <div style={CardStyle}>
                <h1>Sunny</h1>
                <p>Temperature: 29 °C</p>
                <p>Humidity: 40%</p>1
            </div>
            </div>
           
    );
};
export default WeatherCard;