import React from "react";
import hamburguesa from "../assets/hamburguesa.png";
import enchiladas from "../assets/enchiladas.jpg";
import pollo from "../assets/pollo.png";
import sabritas from "../assets/sabritas.jpg";
import sushi from "../assets/sushi.png";
import tacos from "../assets/tacos.jpg";

function Card() {
  return (
    <div >
      <div className="card">
        <img src={hamburguesa} alt="" />
        <div className="card-body">
          <h4 className="card-title">hamburguesa</h4>
          <p className="card-text text-secondary">
            Combo de hamburguesa con pollo y papas
          </p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      

      <div className="card">
        <img src={enchiladas} alt="" />
        <div className="card-body">
          <h4 className="card-title">enchiladas</h4>
          <p className="card-text text-secondary">Enchiladas rojas</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={pollo} alt="" />
        <div className="card-body">
          <h4 className="card-title">pollo</h4>
          <p className="card-text text-secondary">Pollo con papas</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={sabritas} alt="" />
        <div className="card-body">
          <h4 className="card-title">sabritas</h4>
          <p className="card-text text-secondary">Sarbitas papitas amarillas</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={sushi} alt="" />
        <div className="card-body">
          <h4 className="card-title">sushi</h4>
          <p className="card-text text-secondary">Sushi mar y tierra</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={tacos} alt="" />
        <div className="card-body">
          <h4 className="card-title">tacos</h4>
          <p className="card-text text-secondary">Orden de tacos</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;