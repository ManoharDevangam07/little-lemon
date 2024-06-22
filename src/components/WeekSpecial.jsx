import React from 'react'
import Card from './Card'
import '../components/css/weekspecial.css'
import greenSalad from '../assets/icons_assets/greek salad.jpg'
import Bruchetta from '../assets/icons_assets/bruchetta.svg'
import LemonDesert from '../assets/icons_assets/lemon dessert.jpg'
const WeekSpecial = () => {
  return (
    <main>
      <div>
        <h1 style={{color:"black"}}>This Weeks Specials!</h1>
        <button className='primary-btn'>Online Menu</button>
      </div>
      <section className='specials-container'>
        <Card img={greenSalad} title ="Green salad" description="his is a delicious and healthy green salad made with fresh ingredients." price="12.99"/>
        <Card img={Bruchetta} title ="Bruchetta" description="A traditional Italian appetizer with tomatoes, basil, and garlic on toasted bread. Perfect for a light and fresh start to any meal." price="5.99"/>
        <Card img={LemonDesert} title ="Lemon Desert" description="A tangy and sweet treat made with fresh lemons and a creamy base, offering a refreshing end to any meal. Perfect for citrus lovers." price="5.99"/>
      </section>
    </main> 
  )
}

export default WeekSpecial
