import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'
function CheckoutProduct({id, image,title,price,rating}) {
    const [{basket},dispatch]= useStateValue();
    const removefrombasket= ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
    
        <div className='checkoutproduct'>
            <img  classname='ccheckoutproduct_image'src={image} width='180px' height='180px'/>
            <div className='checkoutproduct_info'>
                <p className='checkoutproduct_title'>{title}</p>
                <p className='checkoutproduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutproduct_rating'>
                    {Array(rating).fill().map((_,i)=>(
                        <p>*</p>
                    ))}
                </div>
                <button className='btn' onClick={removefrombasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
