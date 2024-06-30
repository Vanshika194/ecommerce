import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../content/Shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/BreadCrums/Breadcrums';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Relatedproduct from '../components/Relatedproducts/Relatedproduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  return (
    <div>
      <Breadcrums product={product} />
      <Productdisplay product={product} />
      <Relatedproduct />
    </div>
  );
}

export default Product;
