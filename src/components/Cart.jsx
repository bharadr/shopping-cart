import '../App.css';
import PropTypes from 'prop-types';


function Cart({ isOpen, closeCart, contents }) {
    let subTotal = 0;
    for (let i = 0; i < contents.length; i++) {
        subTotal += (contents[i].total * contents[i].price);
    }

    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeCart}>Close</button>
        <div className="content">
          {contents.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            contents.map((item, index) => (
              <div key={index}>
                <p><b>{item.title}</b>: {item.total}</p>
              </div>
            ))
          )}
        </div>
        <div><b>Subtotal:</b> {subTotal.toFixed(2)}</div>
      </div>
    );
}

Cart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeCart: PropTypes.func.isRequired,
    contents: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
};

  
export { Cart };
