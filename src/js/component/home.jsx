import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Carta from "./carta.jsx";
import Footer from "./footer.jsx";



//create your first component
const Home = () => {
	// es un arreglo con que mas?
	const datos =[
		{
		titulo: "handball",
		descripcion: "deporte en equipo",
		img: "https://s.yimg.com/ny/api/res/1.2/QzYVGVEcyv4ojDvIX6O9rg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://media.zenfs.com/es/iprofesional_650/4a74c80c60c61fbab6c93a4890f5733e",
		color: "danger"
	},
	{
		titulo: "surf",
		descripcion: "deporte en la playa",
		img: "https://www.rockandpop.cl/wp-content/uploads/2015/11/surf-femenino-2-768x511.jpg",
		color: "info"
	},
	{
		titulo: "football",
		descripcion: "deporte que se juega con 12 jugadores",
		img: "https://files.antena2.com/antena2/public/styles/imagen_despliegue/public/2022-07/Seleccion%20femenina%20Ecuador_0.jpg.webp?VersionId=wdbFI2MC7DggcAS3OmguPTH.iKZYYU5f&itok=1W-Z7Zpu",
		color: "warning"
	},
	{
		titulo: "hockey",
		descripcion: "deporte en equipo",
		img: "https://www.alairelibre.cl/noticias/site/artic/20220706/imag/foto_0000000920220706154912.jpg",
		color: "success"
	}
	]
	
	//se desea mapear el arreglo que contiene objetos para que cada elemnt del arreglo tenga una carta asociada
	return (
		<div className="container-fluid">
			<Navbar/>
			
			<div className="container my-5">
				<Jumbotron/>
			</div>
		<div className="row my-5 d-flex justify-content-center ">
			{datos.map((objeto,posicion)=>{
				return <Carta titulo={objeto.titulo} 
				descripcion={objeto.descripcion}
				img={objeto.img}
				color={objeto.color}/>
			})}
		</div>
	
		<Footer/>	
		</div>

		
	);
};

export default Home;
