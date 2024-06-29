import React, { useContext } from 'react'
import { ShopContext } from '../content/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/BreadCrums/Breadcrums';
import Productdisplay from '../components/Productdisplay/Productdisplay';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product =all_product.find((e)=> e.id=== Number(productId));

  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product} />
    </div>
  )
}

export default Product
