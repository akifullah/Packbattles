import React from 'react'
import { Link } from 'react-router-dom'

import kart1 from "../../assets/img/karte1 2.png";
// import kart1 from "../../assets/img/kart1"

import lineUp from "../../assets/img/line-u.svg";
import lineDown from "../../assets/img/line-d.svg";
import "./PackCard.css"


const PackCard = ({text, img, price , url, active}) => {

  return (
    <>


      <div className={`packCard text-center ${active? "active": null}`}>
        {
          active ?
            <img className='line-img line-u' src={lineUp} alt="carve line" />
            : null
        }
        <img className='pack-img' src={img} alt="Pack card image" />
        <p>{text}</p>
        <Link to={url}>${price}</Link>

        {
          active ?
            <img className='line-img line-d' src={lineDown} alt="carve line" />
            : null
        }

      </div>


    </>

  )
}

export default PackCard