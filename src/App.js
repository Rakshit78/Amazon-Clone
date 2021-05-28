import React, {useEffect} from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login';
import firebase, { auth } from './firebase'
import {useStateValue} from './StateProvider'
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51IspDFSBTj9M4EzHPzb0Y2cFhvSAt6NnNamxktePzrg4lWIEu5Be6pCcGP7CR0iLll9Lyh5mkbbb1BRUvOmHS9VL00wr29hAl1');
function App() {
  const [{}, dispatch]= useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authuser=>{
      console.log('this  is the user>>>',authuser);
      if(authuser){
// user  login
dispatch({
  type:'SETUSER',
  user: authuser
})
      }else{
        //user logout
    dispatch({
      type:'SETUSER',
      user:null
    })
      }
    })
    return () => {
      // use only once app component loads
    }
  }, [])
  return (
    //bem convention
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
       <Login/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
        <Route path='/checkout'>
            <Header />
            <Checkout/>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
