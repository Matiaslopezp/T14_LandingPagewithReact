import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Carta from "./carta.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar/>
			
			<div className="container my-5">
				<Jumbotron/>
			</div>
		<div className="row my-5 d-flex justify-content-center">
		<Carta/>
		<Carta/>
		<Carta/>
		<Carta/>
		</div>
			
		</div>
		
	);
};

export default Home;
