import '../App.css'
import PropTypes from 'prop-types';
import { useState } from 'react'

function Card({title, description, price, imgSrc, content, setContent}) {
    let index = content.findIndex(item => item.title === title);
    let initialTotal = 0;
    if (index !== -1) {
        initialTotal = content[index].total;
    }
    const [total, setTotal] = useState(initialTotal);

    const handleChange = (e) => {
        let inputValue = e.target.value;

        // Convert to an integer if the input value is not empty
        if (inputValue !== "") {
            inputValue = Math.abs(parseInt(inputValue, 10));
            // If the input is not a valid number or empty, set to 0;
            if (isNaN(inputValue) || inputValue === "") {
                inputValue = 0;
            }
        } else {
            // If empty, set to 0.
            inputValue = 0;
        }

        setTotal(inputValue);
    };

    const submitChange = () => {
        let newObj = {total, price, title};
        let contentCopy = [...content];
        let index = contentCopy.findIndex(item => item.title === newObj.title);
        if (index !== -1) {
            if (total === 0) {
                contentCopy = contentCopy.filter(item => item.title !== title);
            } else if (total !== contentCopy[index].total) {
                contentCopy[index].total = total;
            }
        } else {
            if (total > 0) {
                contentCopy.push(newObj);
            }
        }
        setContent(contentCopy);
    }


    return (
        <div className="card">
            <img className="card-image" src={imgSrc} alt={description}></img>
            <div className='cardContent'>
                <p className="card-data">{title}</p>
                <p className="card-data">{price.toFixed(2)}$</p>
                <input type="number" min="0" step="1" value={total} onChange={handleChange}/>
                <button className="submitButton" onClick={submitChange}>Order</button>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
    setContent: PropTypes.func.isRequired
};
  



export { Card };