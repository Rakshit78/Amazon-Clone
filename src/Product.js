import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'
function Product({id,title,image,price,rating}) {
   const [{ basket }, dispatch] = useStateValue();
  // console.log( 'this is the',basket);
    const addToBasket = () =>{
        // dispatch some item into data layer
      dispatch({
          type:'Add_TO_BASKET',
          item:{
              id:id,
              title:title,
              image:image,
              rating:rating,
              price:price,
          }
      });
    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'><small>$</small><strong>{price}</strong></p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_,i)=>{
                      <p>***</p>
                    })}
                   {/* <p>{rating}</p>*/}
                    
                    
                </div>
            </div>
            <img src={image} width='250px' height='400px'/>
            <button className='btn' onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
