import React from "react";
import { shoes } from "../shoes";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <React.Fragment>
<div className="home-container">
 <Grid item xs={12}>
          <Paper className={"about-us"}></Paper>
        </Grid>
        </div>     
      <div className="latest-container">
        <hr className="line" /> &nbsp; &nbsp;
        <span className="latest-designs">Our Latest Designs</span>&nbsp;&nbsp;
        <hr className="line" />
        <br />
        <br />
      </div>
    
      <div className="product-container image-gallery">
        {Object.keys(shoes).map((keyName) => {
          const shoe = shoes[keyName];
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
                <h6 className="shoe-name">{shoe.name}</h6>
                <h6 className="shoe-price">${shoe.price}</h6>
              </div>
            </div>
          );
        })}
      </div>
      
    </React.Fragment>
  );
};

export default Home;
