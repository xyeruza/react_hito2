import React from "react";
import iconPizza from "../assets/img/icon-pizza.png";
import iconEyes from "../assets/img/icon-eyes.png";
import iconCart from "../assets/img/icon-cart.png"

const CardPizza = (props) => {

  const precio = props.price;
  const formattedPrecio = precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP'}); 

  return (
    <>
      <div className="col">
        <div className="card shadow-sm rounded-3">
          <img src={props.img} alt="" />
          <div className="card-body">
            <h3>Pizza {props.name}</h3>
            <hr class="border-bottom border-1 border-dark"></hr>
            <p className="text-center"> Ingredientes:</p>
            <p className="card-text text-center"><img src={iconPizza} alt="icon-pizza" width="30"
                  height="24"/>
              {props.ingredients.join(", ")}
            </p>
            <hr class="border-bottom border-1 border-dark"></hr>
            <p className="text-center fs-4 fw-medium">Precio {formattedPrecio}</p>
            <div className="d-flex justify-content-between ">
              
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Ver Más
                  <img src={iconEyes} alt="icon-eyes" width="30"
                  height="24"/>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-dark btn-outline-primary text-white"
                >
                  Añadir <img
                  src={iconCart}
                  alt="icon cart"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPizza;
