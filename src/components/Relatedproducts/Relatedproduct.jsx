import React from 'react';
import './Relatedproduct.css';
import dataProduct from '../Assets/data';
import Items from '../Item/Items';

const Relatedproduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedpro-items'>
        {dataProduct.map((product, index) => (
          <Items 
            key={index} 
            id={product.id} 
            name={product.name} 
            image={product.image} 
            new_price={product.new_price} 
            old_price={product.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Relatedproduct;
