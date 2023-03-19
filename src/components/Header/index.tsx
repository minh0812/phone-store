import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";

var formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const Header = () => {
  const cartItems = useSelector(selectCart);
  let cost = 0;
  cartItems.map((cartItem) => (cost += cartItem.totalPrice));

  let cart_number = 0;
  for (let i = 0; i < cartItems.length; i++) {
    cart_number += cartItems[i].quantity;
  }

  return (
    <div className="header">
      <Link to="/" className="header-title">
        Shopping Cart
      </Link>
      <Link to="/cart" className="cart">
        <Cart className="cart-icons" color="rgb(233, 80, 34)" size={35} />
        <span className="number-item">{cart_number}</span>
        <p className="tongtien-header">Tổng: {formatter.format(cost)}</p>
      </Link>
    </div>
  );
};

export default Header;
