import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Alert from '@material-ui/lab/Alert';
import { Paper,  Grid } from "@material-ui/core";
import carimage2 from "./../images/carimage2.png";

import {
//   selectTotalAmount,
  selectProducts,
  setTotalAmount,
  store,
  decrementProduct,
  incrementProduct,
} from "../store/store";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  root: {
    backgroundColor: 'white',
  },
  paperRoot: {
    backgroundColor: "#ece4e4c5",
  },

  tableHeader: {
    fontWeight: "bold",
    padding: "10px",
    fontSize: "16px",
  },
  emptyCart: {
    display: "flex",
    alignItems: "center",
  },
});
const OrderDetails = () => {
  const classes = useStyles();

  const products = useSelector(selectProducts);
  const cartProducts = products.filter((product) => product.added);
//   let totalAmount = useSelector(selectTotalAmount);

  const [open, setOpen] = React.useState(false);

  // Calculate Total Amount
  let sum = cartProducts
    .map((product) => {
      let price = product.price;
      let quantity = product.quantity;
      let total = price * quantity;
      return total;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  // Use Effect
  useEffect(() => {
    store.dispatch(setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);

  return (
    <React.Fragment>

      <div className="latest-container">
        <hr className="line" /> &nbsp; &nbsp;
        <span className="latest-designs">Order Details</span>&nbsp;&nbsp;
        <hr className="line" />
        <br />
        <br />
      </div>
      <div className="table-container">
      {open ===true ?<Alert variant="filled" severity="success">Order completed. Thank you for your order!!
</Alert> :"" }

        {cartProducts.length > 0 ? (
          <TableContainer
            component={Paper}
            //    className={classes.paperRoot}
          >
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader} align="center">
                    Product Image
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="center">
                    Product Name
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="center">
                    Item
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="center">
                    Quantity
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="center">
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      <img alt={"product"}src={product.imageUrl} height="60px" width="60px" />
                    </TableCell>
                    <TableCell component="th" align="center" scope="row">
                      {product.title}
                    </TableCell>

                    <TableCell align="center">{product.quantity}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <button
                        className="item-button"
                        onClick={() =>
                          store.dispatch(decrementProduct(product))
                        }
                      >
                        -
                      </button>
                      <input
                        readOnly
                        className="quantity"
                        maxLength="3"
                        type="text"
                        id="quantity"
                        value={product.quantity && product.quantity}
                      />
                      <button
                        className="item-button"
                        onClick={() =>
                          store.dispatch(incrementProduct(product))
                        }
                      >
                        +
                      </button>
                      <br />
                    </TableCell>
                    <TableCell align="center">{product.price}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  {/* <TableCell rowSpan={3} /> */}
                  <TableCell
                    className={classes.tableHeader}
                    align="right"
                    colSpan={4}
                  >
                    Total :
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="right">
                    {sum}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="right"
                    className={classes.tableHeader}
                  >
                    Order ID :
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="right">
                    {" "}
                    {"1IQBD9Wor7"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5} align="right">
                    <button
                    //   variant="contained"
                    //   color="secondary"
                    
                    onClick={() => {
                        setOpen(true);
                      }}
                      className="button-checkout"
                    >
                      Proceed to Checkout{" "}
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
            {" "}
            <img alt={"cart"} src={carimage2} height="100" width="100" />
            <span className={classes.emptyCart}>Your Cart is Empty</span>
          </Grid>

        )}
      </div>{" "}
    </React.Fragment>
  );
};

export default OrderDetails;
