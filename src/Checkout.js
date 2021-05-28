import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'


function Checkout() {
    const [{basket,user},dispatch]= useStateValue();
    return (
        <div className='checkout'>
            <div className='left'>
                <img className='checkout_ad' src='./images/banner.png' />
                <div >
                    <h3>{user? user.email : ''}</h3>
                    <h2 className='checkout_title'>Your shopping Basket</h2>
                   {/* basketitem */}
                   {basket.map((item)=>(
                   <CheckoutProduct
                   id={item.id}
                   image={item.image}
                   title={item.title}
                   price={item.price}
                   rating={item.rating}
                   />
                   ))}
                  

                </div>
            </div>
       <div className='right'>
           <Subtotal/>
       </div>
        </div>
    )
}

export default Checkout
