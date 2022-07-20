import { prettyDOM } from '@testing-library/react'
import './ItemList.css';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFetch } from '../ItemList/getFetch';
import Item from './Item/Item';



const ItemList = () => {

    const [ placas, setProductos ] = useState([])
    const [ loading, setLoading ] = useState([true])
  
    useEffect(()=>{
        getFetch()
        .then(respuesta => setProductos(respuesta))
        .catch( err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])


    // let productos = JSON.parse(productosJSON);

    return (
        <>
            <div className='card_itemList'>
                {loading ? <h1 style={{color: "white"}}>Cargando...</h1>
                :
                 placas?.map (placa => <Item {...placa}/>)}
            </div>
        </>

  )
}

export default ItemList