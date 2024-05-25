import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import '../App.css'
import CartImage from "../assets/cart.png"


function CartIcon({toggleCart, totalItems}) {
    return (
        <div className="cart-container">
          <button onClick={toggleCart} className="cart-button">
            <img id="cart-image" src={CartImage} alt="An Cart Image"></img>
            <span className="cart-count">{totalItems}</span>
          </button>
        </div>
    );    
}

function NavigationBar({toggleCart, totalItems}) {
    return (
        <div id="navigation-bar">
            <p id="navigation-title">Shopping Cart</p>
            <div id="navgiation-buttons">
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="shop">Shop</Link>
                </button>
                <CartIcon toggleCart={toggleCart} totalItems={totalItems}/>
            </div>
        </div>
    )
}

NavigationBar.propTypes = {
    totalItems: PropTypes.number.isRequired,
    toggleCart: PropTypes.func.isRequired,
};

CartIcon.propTypes = {
    totalItems: PropTypes.number.isRequired,
    toggleCart: PropTypes.func.isRequired,
};


export { NavigationBar };