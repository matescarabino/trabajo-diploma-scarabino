import React from 'react'
import './CartWidget.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartWidget = () => {
  return (
    <FontAwesomeIcon className='icono' icon={faShoppingCart} />
  )
}

export default CartWidget


