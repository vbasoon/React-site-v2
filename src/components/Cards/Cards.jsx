import React from 'react'
import CardItem from '../../pages/CardItem';
import './Cards.css'


const Cards = () => {
   return (
      <div className="cards">
         <h1>Подивися ці неймовірні подорожі!</h1>
         <div className="cards__container">
            <div className="cards__wrapper">
               <div className="cards__items">
                  <CardItem
                     src='images/img-9.jpg'
                     text="Досліди прихований водоспад в хащах джунґлів Амазонії"
                     label="Пригоди"
                     path='/services'
                  />
               </div>
            </div>

         </div>
      </div>
   )
}

export default Cards
