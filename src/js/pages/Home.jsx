import React from "react";

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