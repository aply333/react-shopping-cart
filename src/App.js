import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (item)=>{

  }

  return (
    <div className="App">
      <CartContext.Provider value = { {cart} }>
        <Navigation />
        <Route path="/cart" component={ShoppingCart}/>
      </CartContext.Provider>
      {/* Routes */}
      <ProductContext.Provider value= {{ products, addItem }}>
        <Route exact path="/" component={Products} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
