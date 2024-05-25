import '../App.css';

function Cart({ isOpen, closeCart }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeCart}>Close</button>
      <div className="content">
        <p>This is your sidebar message.</p>
      </div>
    </div>
  )
}

export { Cart };
