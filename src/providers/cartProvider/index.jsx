"use client";

import { createContext, useState } from "react";

export const cartContext = createContext();
export default function CartContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const updateCartTotal = (items) => {
    const productQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.subtotal, 0);
    setTotal({
      productQuantity,
      totalPrice,
    });
  };

  const updateQuantity = (currentItem, targetItem, quantity) => {
    if (currentItem.id === targetItem.id) {
      const newQuantity = currentItem.quantity + quantity;
      return {
        ...currentItem,
        quantity: newQuantity < 1 ? 1 : newQuantity,
        subtotal: (newQuantity < 1 ? 1 : newQuantity) * currentItem.amount,
      };
    } else {
      return currentItem;
    }
  };

  const isItemAlreadyInCart = (id) => {
    const valid = cartItems.some((item) => item.id === id);
    return valid;
  };
  const addToCart = (newItem) => {
    let updatedItems;

    if (isItemAlreadyInCart(newItem.id)) {
      updatedItems = cartItems.map((item) => {
        return updateQuantity(item, newItem, newItem.quantity);
      });
    } else {
      updatedItems = [
        ...cartItems,
        { ...newItem, subtotal: newItem.quantity * newItem.amount },
      ];
    }

    setCartItems(updatedItems);
    updateCartTotal(updatedItems);
  };

  const removeFromCart = (itemToRemoveId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemToRemoveId);
    setCartItems(updatedItems);
    updateCartTotal(updatedItems);
  };

  const increaseItemQuantity = (itemToIncrease) => {
    const updatedItems = cartItems.map((item) => {
      return updateQuantity(item, itemToIncrease, 1);
    });
    setCartItems(updatedItems);
    updateCartTotal(updatedItems);
  };

  const decreaseItemQuantity = (itemToDecrease) => {
    const updatedItems = cartItems.map((item) => {
      return updateQuantity(item, itemToDecrease, -1);
    });
    setCartItems(updatedItems);
    updateCartTotal(updatedItems);
  };

  const resetCart = () => {
    setCartItems([]);
    updateCartTotal([]);
  };

  return (
    <cartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        total,
        cartItems,
        increaseItemQuantity,
        decreaseItemQuantity,
        addToCart,
        removeFromCart,
        resetCart,
        isItemAlreadyInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
