import React from "react";
import { useStateValue } from "./StateProvider";
import stylesCheckout from "./Checkout.module.scss";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className={stylesCheckout.checkout}>
      <div className={stylesCheckout.left}>
        <img
          className={stylesCheckout.ad}
          src="https://images-na.ssl-images-amazon.com/images/G/08/FR-hq/2019/img/X_Site/XCM_Manual_1195172_1195172_950358_FR_X_SITE_DIRECT_DEBIT_GENERIC_770X60_1571481904_jpg._CB450835792_.jpg"
          alt=""
        />
        <div>
          <h2>
            {basket?.length === 0 ? (
              <div>
                <h1>Your basket is empty</h1>
                <p>
                  You have no items in your basket. To buy one ir more items,
                  click "add to basket" next to the item
                </p>
              </div>
            ) : (
              <div>
                <h2 className={stylesCheckout.title}>Your Shopping Basket</h2>
                {basket.map((item, i) => (
                  <CheckoutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            )}
          </h2>
        </div>
      </div>
      {basket.length > 0 && (
        <div className={stylesCheckout.subtotal}>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
