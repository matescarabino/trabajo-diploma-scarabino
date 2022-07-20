import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { React } from "react";
import { useState } from "react";
import './ItemCount.css'


const ItemCount = ({stock, initial}) => {
    
    let [count, actualizarCount] = useState(initial)

    count = parseInt(count);

    function plusClick(){
        
        if(count == stock){
            return
        }else if(count < stock){
            actualizarCount(count + 1)
            console.log(count)
        }
    }

    function minusClick(){
        if(count > 1){
            actualizarCount(count - 1)
            console.log(count)
        }
    }

    return (
    <>
    <section>
        <div className='card'>
            <div className="titulo">Camisa tiger</div>
            <div className='card__contador'>
                <button onClick={minusClick}> - </button>

                <div className='card__contador__cantidad'>{count}</div>
            
                <button onClick={plusClick}> + </button>
            </div>
            <button>Agregar al carrito</button>
        </div>
    </section>
    </>
  )
}



export default ItemCount