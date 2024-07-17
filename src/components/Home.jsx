import React from 'react'
import Iphone from '../assets/Iphone.jpg'

function Home(props) {
    // props come from HomeContainer
    console.log("home", props);
    return (
        <div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Iphone} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price: 1000, name: "Iphone 11 pro max"})}>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;