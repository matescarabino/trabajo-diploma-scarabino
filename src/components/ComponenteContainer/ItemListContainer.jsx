import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({saludar}) => {
    
  return (
    <>
    <div className='mensaje'>
        {saludar}
    </div>
    </>
    )
}

export default ItemListContainer