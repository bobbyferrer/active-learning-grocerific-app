import React, { useState, useEffect } from "react";
import ProductGrid from "./ProductGrid";
import CartDrawer from "./CartDrawer";

export default function App() {
  const savedCart =
    typeof window !== "undefined"
      ? localStorage.getItem("grocerific-cart")
      : null;
  const [cartItems, setCartItems] = useState(
    savedCart ? JSON.parse(savedCart) : [],
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("grocerific-cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product: any) => {
    const existingItemIndex = cartItems.findIndex(
      (item: any) => item.id === product.id,
    );

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: (updatedCartItems[existingItemIndex].quantity || 1) + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId: string) => {
    const updatedCartItems = cartItems.map((item: any) =>
      item.id === productId
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item,
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (productId: string) => {
    const updatedCartItems = cartItems
      .map((item: any) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item,
      )
      .filter((item: any) => item.quantity > 0);
    setCartItems(updatedCartItems);
  };

  const removeItem = (productId: string) => {
    const updatedCartItems = cartItems.filter(
      (item: any) => item.id !== productId,
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Grocerific Grocery Store</h1>
        <button
          onClick={() => setCartOpen(true)}
          className="bg-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Cart ({cartItems.length})
        </button>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ProductGrid onAddToCart={addToCart} searchTerm={searchTerm} />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeItem}
      />
    </div>
  );
}
