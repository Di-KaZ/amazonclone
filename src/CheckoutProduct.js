import React from "react";
import stylesCheckoutProduct from "./CheckoutProduct.module.scss";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={stylesCheckoutProduct.checkout}>
      <img src={image} alt="" />
      <div className={stylesCheckoutProduct.divInfo}>
        <p className={stylesCheckoutProduct.title}>{title}</p>
        <p className={stylesCheckoutProduct.info}>
          <strong>{price}</strong>
          <small>€</small>
        </p>
        <div className={stylesCheckoutProduct.rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="rating">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
