import React from "react";
import ReactDOM from 'react-dom'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//importar componentes
import TrafficLight from "../components/TrafficLight";

//create your first component
const Home = () => {
	return (
		<>
		<TrafficLight />	
		</>
	);
};

export default Home;