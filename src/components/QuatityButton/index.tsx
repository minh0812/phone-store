import React from "react";


interface Props {
  setQuantity: (quantity: number) => void;
  quantity: number;
}

const QuatityButton: React.FC<Props> = ({setQuantity, quantity}) => {

  const addQuantity = () => {
    setQuantity(quantity+1);
  }

  const subQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity-1);
    }
  }

  return (
    <div className="product-number">
      <p>Số lượng:</p>
      <p className="sub" onClick={subQuantity}>–</p>
      <p>{quantity}</p>
      <p className="sum" onClick={addQuantity}>+</p>
    </div>
  );
};

export default QuatityButton;
