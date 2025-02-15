import React, { useState } from "react";

const TrafficLight = () => {

    const [ color, setColor ] = useState("red");

    let rojo = () => setColor("red");
    let amarillo = () => setColor("yellow");
    let verde = () => setColor("green");

    let rojoCond = color === "red" ? "-selected" : "";
    let amarrilloCond = color ===  "yellow" ? "-selected" : "";
    let verdeCond = color === "green" ? "-selected" : "";

    //1º Punto Extra
    const [ automatico, setAutomatico ] = useState(false);

    const handleClickAutomatico = (light) => {

    }

    //2º Punto Extra
    const [ esPurpura, setEsPurpura ] = useState(false);
    
    let purpura = () => setColor("purple");
    let purpuraCond = color === "purple" ? "-selected" : "";

    const handleClickPurpura = () => {
        setEsPurpura(!esPurpura);
    }

    return (
        <div>
            <h3>Semáforo</h3>
            <div id="trafficTop"></div>
            <div id="container">
                <div onClick={ rojo } className={"red-light"+rojoCond}></div>
                <div onClick={ amarillo } className={"yellow-light"+amarrilloCond}></div>
                <div onClick={ verde } className={"green-light"+verdeCond}></div>
                {esPurpura && (
                    <div onClick={ purpura } className={"purple-light"+purpuraCond}></div>
                )}
                
            </div>
            <div id="botones">
                
                <button>Modo { automatico ? "Manual" : "Automático" }</button>

                <button onClick={handleClickPurpura}>Añadir púrpura { esPurpura ? "Activo" : "Inactivo" }</button>

            </div>
        </div>
    );

};

export default TrafficLight;