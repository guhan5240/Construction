import React from "react";
import AppRoutes from "./Router/Routes";
import { CartProvider } from "./Context/CardContext";
import { WishlistProvider } from "./Context/WishlistContext"; // if you use wishlist

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <AppRoutes />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;

