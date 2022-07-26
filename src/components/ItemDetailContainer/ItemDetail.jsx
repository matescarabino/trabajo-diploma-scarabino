import React from "react";

export const ItemDetail = (placa) => {
  return (

    <div className="card__item" key={placa.id}>
      <div className="card__item_titulo">Placa: {placa.placa} </div>
      <div className="card__item_precio">Precio: $ {placa.precio}</div>
      <button>Detalle</button>
    </div>
  );

};

export default ItemDetail;
