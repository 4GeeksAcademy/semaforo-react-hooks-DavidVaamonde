import React, { useState } from "react";

const TrafficLight = () => {

    const [ color, setColor ] = useState("red");

    let rojo = () => setColor("red");
    let amarillo = () => setColor("yellow");
    let verde = () => setColor("green");

    let rojoCond = color === "red" ? "-selected" : "";
    let amarrilloCond = color ===  "yellow" ? "-selected" : "";
    let verdeCond = color === "green" ? "-selected" : "";

    return (
        <div>
            <h3>Semáforo</h3>
            <div id="trafficTop"></div>
            <div id="container">
                <div onClick={ rojo } className={"red-light"+rojoCond}></div>
                <div onClick={ amarillo } className={"yellow-light"+amarrilloCond}></div>
                <div onClick={ verde } className={"green-light"+verdeCond}></div>
            </div>
        </div>
    );

};

export default TrafficLight;