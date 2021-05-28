import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import {getBasketTotal} from './reducer'
import { useHistory, Link } from 'react-router'

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>Subtotal ({basket.length} items):
                <strong>{value}</strong></p>
                <small className='subtotal_gift'>
                    <input type='checkbox' />This order contain  gift
                </small>
                </>
            )}
            decimalsScale={2}
            value={getBasketTotal(basket)}
            displayType='text'
            thousandSeparator={true}
            prefix='$'
            />

            <button className='btn' onClick={(e=> history.push('/payment'))}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
