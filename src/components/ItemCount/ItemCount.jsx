import { React } from "react";
import { useState } from "react";
import './ItemCount.css'


const ItemCount = ({stock, initial}) => {
    
    let [count, actualizarCount] = useState(initial)

    function plusClick(){
        
        if(count == stock){
            return
        }else if(count < stock){
            actualizarCount(count++)
            console.log(count)
        }
    }

    function minusClick(){
        if(count > 1){
            actualizarCount(count--)
            console.log(count)
        }
    }



    return (
    <>
    <section>
        <div className='card__contador'>

            <button onClick={minusClick}> - </button>

            <div className='card__contador__cantidad'>{count}</div>
        
            <button onClick={plusClick}> + </button>

        </div>
    </section>
    </>
  )
}



export default ItemCount