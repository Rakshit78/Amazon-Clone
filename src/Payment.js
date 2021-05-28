import { ListItemAvatar } from '@material-ui/core';
import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import {useStateValue} from './StateProvider'
import {Link} from 'react-router-dom'
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket,user }, dispatch] = useStateValue();
    const stripe =useStripe();
    const Elements = useElements();
// for stripe below
    const handlesubmit=(e)=>{}
    const handlechange =(e)=>{}/*

    const [error, seterror] = useState();
    const [disable, setdisable] = useState();*/
    return (
    
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
                <div className='payment_section'>
               <div className='payment_title'>
                   <h3>DELIVERY ADDRESS</h3>
                   <div className='payment_address'>
                   <p>{user?.email}</p>
                   <p>h.no. 77/77</p>
                   <p>delhi(110021) india </p></div>
               </div>
                </div>
                <div className='payment_section'>
                 <div className='payment_title'>
                     <h3>REVIEW ITEM ADD DELIVERY</h3>
                 </div>
                 <div className='payment_items'>
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
                <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment method</h3>
            </div>
            <div className='payment_detail'>
                {/* stripe */}
                <form onClick={handlesubmit}>
                    <CardElement onChange={handlechange}/>
                </form>
            </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
