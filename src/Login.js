import React,{useState} from 'react'
import './Login.css'
import Header from './Header'
import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const signin = (e) =>{
e.preventDefault();
// firebase login
auth.signInWithEmailAndPassword(email,password).then(auth =>{
    history.push('/');
}).catch((err)=> alert(err.message))

}
const resister = (e)=>{
    e.preventDefault();
    // firebase resister
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
      //  console.log(auth);
        if(auth){
            history.push('/');
        }
    })
    .catch((err)=>console.log(err));
}
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login_image' src='./images/amazon.png' width='100px' height='100px'/></Link>

            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input className='i' type='text' value={email} onChange={e=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input className='i' type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button type='submit'className='btn s' onClick={signin}>Sign-in</button>
                    <p>By signing in you agree to  amzon terns and conditon</p>
                    <button className='btn' onClick={resister}>Create an account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
