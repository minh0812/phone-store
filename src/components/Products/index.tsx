import React, { useEffect, useState } from "react";
import Product from "../Product";
import {  ref, get } from "firebase/database";
import database from "../FireBase";

interface Product_data {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Products = () => {
  const [products_data, setProductsData] = useState<Product_data[]>([]);

  useEffect(() => {
    // get data from firebase
    const starCountRef = ref(database, "product-list");
    get(starCountRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProductsData(snapshot.val());
        console.log('Products:', snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
 
  }, []);

  return (
    <div className="product-list">
      {products_data.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
