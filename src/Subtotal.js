import React from "react";
import stylesSubtotal from "./Subtotal.module.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={stylesSubtotal.sub}>
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className={stylesSubtotal.gift}>
                <input type="checkbox" />
                This order contains gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
