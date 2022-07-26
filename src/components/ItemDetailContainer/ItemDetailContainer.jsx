import React from 'react'
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
  const [results, setResults] = useState([]);




  fetch('./items.json')
    .then(function (response) {
      console.log(response.json());
      return response.json();
    })
    .then(function (data) {
      setResults(data.results);
    });

  return (
    <>
      <div>
        {results.map((item) => (
            <div key={item.id} style={{color: "white"}}>{item.placa}</div>
        ))}

        {/* <ItemDetail {respose}/> */}
      </div>
    </>
  );
};

export default ItemDetailContainer