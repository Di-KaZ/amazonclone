import React from "react";
import headerStyles from "./Header.module.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <nav className={headerStyles.header}>
      <Link to="/">
        <img
          className={headerStyles.logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
        />
      </Link>
      <div className={headerStyles.search}>
        <input type="text" className={headerStyles.searchInput} />
        <SearchIcon className={headerStyles.searchIcon} />
      </div>
      <div className={headerStyles.nav}>
        <Link to="/login" className={headerStyles.link}>
          <div className={headerStyles.options}>
            <span className={headerStyles.lineOne}>Hello Moussa</span>
            <span className={headerStyles.lineTwo}>Sign In</span>
          </div>
        </Link>
        <Link to="/" className={headerStyles.link}>
          <div className={headerStyles.options}>
            <span className={headerStyles.lineOne}>Returns</span>
            <span className={headerStyles.lineTwo}>& Orders</span>
          </div>
        </Link>
        <Link to="/" className={headerStyles.link}>
          <div className={headerStyles.options}>
            <span className={headerStyles.lineOne}>Your</span>
            <span className={headerStyles.lineTwo}>Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className={headerStyles.link}>
          <div className={headerStyles.basket}>
            <ShoppingBasketIcon />
            <span className={`${headerStyles.lineTwo} ${headerStyles.count}`}>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
