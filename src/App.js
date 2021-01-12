import Main from "./Main.js";
import "./App.css";
import { CartProvider } from "./CartContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <div className={"container"}>
      <CartProvider>
        <Provider store={store}>
          <Main />
        </Provider>
      </CartProvider>
    </div>
  );
}

export default App;
