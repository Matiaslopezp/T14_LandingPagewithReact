import React from "react";

//const Card=()=>{}
//export default Card
//destructuring

const Carta = ({img,titulo,descripcion,color})=>{
    return <div className="card" style={{"width": "18rem"}} >
    <img src={img} className="card-img-top w-100 h-100" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default Carta;