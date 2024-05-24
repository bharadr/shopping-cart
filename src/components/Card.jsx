import { useState } from 'react'

function Card({title, description, price, imgSrc}) {

    const [value, setValue] = useState(0);
    const handleChange = (e) => {
        let inputValue = e.target.value;

        // Convert to an integer if the input value is not empty
        if (inputValue !== "") {
            inputValue = Math.abs(parseInt(inputValue, 10));

            // If the input is not a valid number, set to 0
            if (isNaN(inputValue)) {
                inputValue = 0;
            }
        }

        setValue(inputValue);
    };


    return (
        <div className="card">
            <img className="card-image" src={imgSrc} alt={description}></img>
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}$</p>
            <input type="number" min="0" step="1" value={value} onChange={handleChange}/>
            <button className="submitButton">Order</button>
        </div>
    )
}




export { Card };