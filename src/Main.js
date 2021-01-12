import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import Cart from "./Components/cart";
import Product from "./Components/product";
import About from "./Components/about";
import Footer from "./Components/footer";

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route path="*" component={() => <h2>404 Not Found </h2>} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Main;
