import React from 'react'
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({saludar}) => {
    
  const onAdd = (cant) => {
    console.log(`La cantidad es: ${cant}`)
  }


  return (
    <>
    <div className='mensaje'>
        {saludar}
    </div>

    <ItemList />

    <ItemCount stock="5" initial="1"/>

    </>
    )
}

export default ItemListContainer