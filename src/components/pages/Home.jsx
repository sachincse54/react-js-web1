import React from 'react'
import playStore from '../../assets/images/playStore.png'
import appleStore from '../../assets/images/appleStore.png'

const Home = () => {
  return (
    <>
    <div className='homepage'>
        <div className='home_heading'>
            <h1>DELICIOUSNESS, ONE CLICK AWAY!</h1>
        </div>
        <div className='home_btns'>
            <a href='https://www.w3schools.com/' target='_blank' className='home_order-btn'>Order On Web</a>
            <span>Or</span>
            <div className='store_btns'>
                <a href='https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837' target='_blank'><img src={appleStore} alt="Apple Store Image" /></a>
                <a href='https://play.google.com/store/apps/details?id=com.pubg.imobile&hl=en' target='_blank'><img src={playStore} alt="Play Store Image" /></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
