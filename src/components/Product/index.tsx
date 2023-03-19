import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../features/cart/cartSlice";

import QuatityButton from "../QuatityButton";

interface Props {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const Product: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="product">
    <h4 className="product-title">{product.name}</h4>
    <img src={product.image} alt={product.name} />
    <QuatityButton quantity={quantity} setQuantity={setQuantity} />
    <button
      onClick={() => {
        if(quantity > 0) {
          dispatch(addItemsToCart({product, quantity}));
        }
        setQuantity(0);
      }}
    >
      Add to cart
    </button>
    <p className="product-price">
      Giá: {formatter.format(product.price)}
    </p>
  </div>
  );
};

export default Product;
