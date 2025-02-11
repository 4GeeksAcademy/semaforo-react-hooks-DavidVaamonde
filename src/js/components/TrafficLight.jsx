import React, { useState, useEffect } from "react";

const TrafficLight = () => {



    return (
        <div>
            <h3>Semáforo</h3>
            <div id="trafficTop"></div>
            <div id="container">
                <div className="red light"></div>
                <div className="yellow light"></div>
                <div className="green light"></div>
            </div>
        </div>
    );

};

export default TrafficLight;