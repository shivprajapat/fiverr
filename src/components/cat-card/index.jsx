import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const CatCard = ({ card }) => {
    const { img, desc, title } = card
    return (
        <Link to="/gigs">
            <div className="catCard">
                <img src={img} alt="" />
                <span className="desc">{desc}</span>
                <span className="title">{title}</span>
            </div>
        </Link>
    )
}

export default CatCard