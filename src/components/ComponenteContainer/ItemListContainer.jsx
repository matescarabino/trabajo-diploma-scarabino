import React from 'react'
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = ({saludar}) => {
    
  return (
    <>
    <div className='mensaje'>
        {saludar}
    </div>

    <ItemCount stock="5" initial="1"/>

    </>
    )
}

export default ItemListContainer