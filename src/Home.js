import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='./images/prime.png' height='500px' width='100%' />

                <div className='row'>
                    {/*product*/}
                    <Product title='Samsung Galaxy M30' price={50} image ='./images/smartphone1.jpg' rating={5}/>
                    <Product title='8 Sitter Sofa' price={100} image ='./images/sofa1.jpg' rating={5}/>
                   
                    {/*product*/}
                  
                    
                </div>
                <div className='row'>
                <Product title='Realme 9' price={100} image ='./images/smartphone.jpg' rating={5}/>
                <Product title='8 Sitter Sofa' price={100} image ='./images/sofa1.jpg' rating={5}/>
                <Product title='Iphone-12' price={100} image ='./images/iphone.jpg' rating={5}/>
                    {/*product*/}
                    {/*product*/}
                </div>
                <div className='row'>
                <Product title='Luxury Sofa' price={500} image ='./images/sofa2.jpg' rating={5}/>
                </div>


            </div>

        </div>
    )
}

export default Home
