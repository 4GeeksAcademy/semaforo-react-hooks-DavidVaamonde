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
    const [ alternar, setAlternar ] = useState("red");

    const handleClickAlterar = () => {
        if (color === "red") {
            setAlternar(amarillo);
        } else if (color === "yellow") {
            setAlternar(verde);
        } else if (color === "green") {
            setAlternar(rojo);
        } else
            setAlternar(rojo);
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
            <div className="d-flex flex-row">
                
                <button onClick={ handleClickAlterar } className="btn btn-outline-primary m-2">
                    Alternar color
                </button>

                <button onClick={handleClickPurpura} className="btn btn-outline-secondary m-2">
                    Añadir púrpura { esPurpura ? "Activado" : "Desactivado" }
                </button>

            </div>
        </div>
    );

};

export default TrafficLight;