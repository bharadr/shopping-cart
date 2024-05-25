import { Link } from "react-router-dom";

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
                <button onClick={toggleCart}>Cart</button>
                <p>{totalItems}</p>
            </div>
        </div>
    )
}




export { NavigationBar };