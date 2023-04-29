import React from 'react';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';


const Product = () => {
   
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log(response)
            setProduct(await response.json());
            console.log(product);
            setLoading(false);
        }
        getProduct();
        // eslint-disable-next-line
    },[id]);

    const Loading = () => {
        return(
            <>
              Loading...
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
                  
            </div>
            <div className="col-md-6">
                  <h4 className="text-uppercase text-black-50">{product.category}</h4>
                  <h1 className="dixplay-5">{product.title}</h1>
                  <p className="lead fw-bolder">
                  Rating : {product.rating && product.rating.rate}</p>
                  <i className="fa fa-star"></i>
                  <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                  <p className="lead">{product.description}</p>
                  
                  
            </div>  
           
              
            </>
        )
    }
    
    return(
        <div>
            <div className="container">
              <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
              </div>
            </div>
        </div>
    )
}

export default Product;