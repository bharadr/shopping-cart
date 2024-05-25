import '../App.css'
import PropTypes from 'prop-types';

function Card({title, description, price, imgSrc, content, setContent}) {
    let index = content.findIndex(item => item.title === title);
    let total = 0;
    if (index !== -1) {
        total = content[index].total;
    }

    const handleChange = (e) => {
        let inputValue = e.target.value;

        // Convert to an integer if the input value is not empty
        if (inputValue !== "") {
            inputValue = Math.abs(parseInt(inputValue, 10));

            // If the input is not a valid number, leave it unchanged
            if (isNaN(inputValue)) {
                inputValue = 0;
            }
        }

        // If empty, set to 0.
        if (inputValue === "") {
            inputValue = 0;
        }

        let newObj = {total: inputValue, price, title};
        let contentCopy = [...content];
        let index = contentCopy.findIndex(item => item.title === newObj.title);
        if (index !== -1) {
            if (inputValue === 0) {
                contentCopy = contentCopy.filter(item => item.title !== title);
            } else if (inputValue !== contentCopy[index].total) {
                contentCopy[index].total = inputValue;
            }
        } else {
            if (inputValue > 0) {
                contentCopy.push(newObj);
            }
        }
        total = inputValue;
        setContent(contentCopy);
    };

    return (
        <div className="card">
            <img className="card-image" src={imgSrc} alt={description}></img>
            <div className='cardContent'>
                <p className="card-data">{title}</p>
                <p className="card-data">{price.toFixed(2)}$</p>
                <input type="number" min="0" step="1" value={total} onChange={handleChange}/>
                <button className="submitButton">Order</button>
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