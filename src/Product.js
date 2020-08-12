import React from "react";
import stylesProduct from "./Product.module.scss";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className={stylesProduct.product}>
      <p>{title}</p>
      <p className={stylesProduct.price}>
        <strong>{price}</strong>
        <small>€</small>
      </p>
      <div className={stylesProduct.rating}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i} role="img" aria-label="rating">
              ⭐
            </span>
          ))}
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
