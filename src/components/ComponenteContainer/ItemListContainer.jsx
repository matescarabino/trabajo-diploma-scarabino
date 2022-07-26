import React from 'react'
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({saludar}) => {
    

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