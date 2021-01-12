import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import { selectTotalItems } from "./../store/store.js";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const Navbar = () => {
  const [home, setHome] = useState("hvr-underline-from-center nav-link active");
  const [about, setAbout] = useState("hvr-underline-from-center nav-link");
  const [product, setProduct] = useState("hvr-underline-from-center nav-link");
  const [cart, setCart] = useState("hvr-underline-from-center nav-link");

  const setHomeState = () => {
    setHome("hvr-underline-from-center nav-link active");
    setAbout("hvr-underline-from-center nav-link");
    setProduct("hvr-underline-from-center nav-link");
    setCart("hvr-underline-from-center nav-link");
  };

  // About
  const setAboutState = () => {
    setHome("hvr-underline-from-center nav-link");
    setAbout("hvr-underline-from-center nav-link active");
    setProduct("hvr-underline-from-center nav-link");
    setCart("hvr-underline-from-center nav-link");
  };

  // Product
  const setProductState = () => {
    setHome("hvr-underline-from-center nav-link");
    setAbout("hvr-underline-from-center nav-link");
    setProduct("hvr-underline-from-center nav-link active");
    setCart("hvr-underline-from-center nav-link");
  };

  // Cart
  const setCartState = () => {
    setHome("hvr-underline-from-center nav-link");
    setAbout("hvr-underline-from-center nav-link");
    setProduct("hvr-underline-from-center nav-link");
    setCart("hvr-underline-from-center nav-link active");
  };

  let totalItems = useSelector(selectTotalItems);

  return (
    <React.Fragment>
      <Box textAlign="center" fontSize="h2.fontSize" className="box">
        Shoes for everyone
      </Box>
      <div className="nav-container">
        <nav>
          <Link className={home} to="/" onClick={setHomeState}>
            {" "}
            Home{" "}
          </Link>{" "}
          <Link className={product} to="/product" onClick={setProductState}>
            {" "}
            Shoes{" "}
          </Link>{" "}
          <Link className={about} to="/about" onClick={setAboutState}>
            {" "}
            About{" "}
          </Link>{" "}
          <Badge badgeContent={totalItems} color="error">
            <Link className={cart} to="/cart" onClick={setCartState}>
              {" "}
              <AddShoppingCartIcon fontSize="large"></AddShoppingCartIcon>
            </Link>
          </Badge>{" "}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
