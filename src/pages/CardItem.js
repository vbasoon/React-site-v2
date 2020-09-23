import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = (props) => {
   return (
      <>
         <div className="card-item">
            <Link className="card-item__link link" to={props.path}>
               <figure className="card-item__pic-wrapper pic-wrapper" data-category={props.label}>
                  <img src={props.src} alt={props.label}
                     className="card-item__img img" />
               </figure>
               <div className="card-item__info info">
                  <h5 className="card-item__info-text">{props.text}</h5>
               </div>
            </Link>
         </div>
      </>
   )
}

export default CardItem
