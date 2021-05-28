import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider'
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handlesauth = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
          <Link to='/'>  <img src='./images/amazon1.png' width='100px' height='80px'></img></Link>

            <div className='header_search'>
                <input type='text' className='header_search_input' />
                {/* logo */}
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header_nav'>
              <Link to='/login'>
                <div className='header_option' onClick={handlesauth}>
                    <span className='header_optionlineone'>Hello {user? user.email: 'guest'} </span>
                    <span className='header_optionlinetwo'>{user? 'Sign out' :'Sign in'}</span>

                </div>
                </Link>
                <div className='header_option'>
                    <span className='header_optionlineone'>Returns</span>
                    <span className='header_optionlinetwo'>Orders</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionlineone'>Your</span>
                    <span className='header_optionlinetwo'>Prime</span>
                </div>
                <Link to='./checkout'>
                <div className='basket'>
                    <ShoppingBasketIcon />

                    <span className='header_optionlinetwo headerbasketcount'>
{basket?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
