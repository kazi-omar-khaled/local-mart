import React from "react";
import img from '../assets/bg.jpg';
import Products from "./Products";
import './tag.css';

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src={img} className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">

                    </div>
                    <h5 className="card-title display-3 fw-bolder mb-0 tag">Offers Closing Soon!!</h5>
                    <p className="card-text lead fs-2 tag">
                        CHECK OUT ALL THE PRODUCTS
                    </p>

                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home; 