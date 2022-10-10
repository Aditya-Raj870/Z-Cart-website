import React from 'react'
import "./cart.css";
import {Divider} from "@mui/material"

const Cart = () => {
    return (
        <div className='cart_section'>
            <div className="cart_container">
                <div className="left_cart">
                    <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart_img" />
                    <div className="cart_btn">
                        <button className='cart_btn1'>Add to Cart</button>
                        <button className='cart_btn2'>Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>Fitness Gear</h3>
                    <h4>AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)
                    </h4>
                    <Divider />
                    <p className='mrp'>M.R.P :Rs-1195</p>
                    <p>Deal of the day:<span style={{color:"#B12704",fontSize:14}}>Rs:-625.00</span></p>
                    <p>You save : : <span style={{color:"#B12704",fontSize:14}}>Rs:-570 (47%)</span></p>
                    

                    <div className="discount_box">
                        <h5>Discount : <span style={{color: "#111"}}>Extra 10% off</span></h5>
                        <h4>Free Delivery:<span style={{color: "#111",fontWeight:600}}>Oct 8-21</span> Details</h4>
                        <p>Fastest delivery: <span style={{color: "#111",fontSize:14,fontWeight:600}}>Tomorrow 11AM</span></p>
                    </div>
                    <p className='description'> <span style={{color:"#565959",fontSize:16,fontWeight:500,letterSpacing:"0.4px"}}>This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart