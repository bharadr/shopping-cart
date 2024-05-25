import './App.css'
import { NavigationBar } from './components/Navigation'
import { Outlet } from "react-router-dom";
import { Cart } from './components/Cart'
import { useState } from 'react'

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartContents, setCartContents] = useState([]);
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const totalItems = () => {
    return cartContents.reduce((accumulator, currentObject) => {
      return accumulator + (currentObject.total || 0);
    }, 0);
  }

  return (
    <div>
      <NavigationBar toggleCart={toggleCart} totalItems={totalItems()}></NavigationBar>
      <Outlet/>
      <Cart isOpen={cartOpen} closeCart={closeCart} />
    </div>
  )
}

export default App
