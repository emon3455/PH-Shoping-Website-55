import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    const {cart} = props
    const {handleClearCart} = props

    let total =0;
    let shiping = 0;
    let quantity = 0;
    cart.map(product=> {

        if(product.quantity===0){
            product.quantity=1;
        }

        total = total + product.price * product.quantity;
        shiping = shiping + product.shipping;

        quantity = quantity + product.quantity;

    });

    const tax = total * 0.07;
    const grandTotal = total + tax;

    return (
        <div className='cart'>
            
            <h2>Order Details</h2>
            <h4>Item Selected: {quantity}</h4>
            <h4>Total Price: $ {total}</h4>
            <h4>Total Shipping: {shiping}</h4>
            <h4>Tax: ${tax.toFixed(2)}</h4>
            <h3>Grrand Total: ${grandTotal.toFixed(2)}</h3>
            <button onClick={handleClearCart} className='clearCart-btn'> Clear All <i className="fa-solid fa-trash-can"></i></button>
            {
                props.children
            }
        </div>
    );
};

export default Cart;