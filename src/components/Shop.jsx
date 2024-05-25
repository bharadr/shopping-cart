import { useState, useEffect } from 'react'
import { Card } from './Card'


function ShopContents() {

    const [productList, setProductList] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products", { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => {
            let newResponseArray = [];
            for (let i = 0; i < response.length; i++) {
                console.log(response[i]);
                newResponseArray.push(response[i]);
            }
            setProductList(newResponseArray);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;
  
    return (
        <div className='shopSection'>
            {
                productList.map((product) => (
                    <Card key={product.id} title={product.title} description={product.description} price={product.price} imgSrc={product.image}  />
                ))
            }
        </div>
    );
  }




export { ShopContents };