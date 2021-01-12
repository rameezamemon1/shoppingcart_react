import React from "react";
import { useSelector } from "react-redux";
import { store, add, selectProducts, setTotalItems } from "../store/store";
import AddIcon from '@material-ui/icons/Add';

const Product = () => {
  // Select Data from redux store
  const products = useSelector(selectProducts);
  const cartProducts = products && products.filter((product) => product.added);

  store.dispatch(setTotalItems(cartProducts.length));

  return (
    <React.Fragment>
      <div className="shoe-container">
        <div className="product-container image-gallery">
          {Object.keys(products).map((keyName) => {
            const shoe = products[keyName];
            return (
              <div className="card link">
                <div className="home-products" key={keyName}>
                  <img
                    className="products-shoe-image"
                    alt={shoe.name}
                    width={250}
                    height={250}
                    src={shoe.imageUrl}
                  />
                  <h6 className="shoe-name">{shoe.title}</h6>
                  <h6 className="shoe-price">${shoe.price}</h6>
                </div>
                <div className="cart-image">
                  <button
                    className="cart-button"
                    onClick={() => store.dispatch(add(shoe))}
                  >
                 <h3>  Add to cart <AddIcon className={"add-icon"}/></h3>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
