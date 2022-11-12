import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Carta from "./carta.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			
			<div className="container-fluid">
				<Jumbotron/>
			</div>
		
			<Carta />
		</div>
		
	);
};

export default Home;
