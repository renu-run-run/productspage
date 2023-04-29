import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [componentMounted, setComponentMounted] = useState(true);
    

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            console.log(response)
            if (componentMounted) {
                setData(await response.clone().json());
                console.log(data)
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
                
            }
            return () => {
                setComponentMounted(false);
            }
        }
        getProducts();
    // eslint-disable-next-line
    },[]);

    const Loading = () => {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    };
    
    const filterProduct = (cat) =>{
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>jewelery</button>
                </div>
                {filter.map((product,_) => {
                    return (

                        <>
                            <div className="col-md-3 m-2 " >
                                <div className="card h-100 text-center p-4"   >
                                    <img  src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold"> ${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>

        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center"> Latest Products</h1>
                        <hr />

                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products;