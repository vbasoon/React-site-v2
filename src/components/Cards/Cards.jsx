import React from 'react'
import CardItem from '../../pages/CardItem';
import './Cards.css'


const Cards = () => {
   return (
      <div className="cards">
         <h1>Подивися ці неймовірні подорожі!</h1>
         <div className="cards__container">
            <div className="cards__wrapper">
               <ul className="cards__items">
                  <CardItem
                     src='images/img-9.jpg'
                     text="Досліди прихований водоспад в хащах джунґлів Амазонії"
                     label="Пригоди"
                     path='/services'
                  />
                  <CardItem
                     src='images/img-2.jpg'
                     text="Подорожуй до островів Bali приватним круїзом"
                     label="VIP"
                     path='/services'
                  />
               </ul>
               <ul className="cards__items">
                  <CardItem
                     src='images/img-3.jpg'
                     text="Пливи під вітрилом Атланичничним океаном у невідомі води"
                     label="Таємне"
                     path='/services'
                  />
                  <CardItem
                     src='images/img-1.jpg'
                     text="Піднімись на вершину Світу"
                     label="Пригоди"
                     path='/services'
                  />
                  <CardItem
                     src='images/img-4.jpg'
                     text="Зіграй у футбол на одинокому острові"
                     label="VIP"
                     path='/services'
                  />
               </ul>

            </div>

         </div>
      </div>
   )
}

export default Cards
