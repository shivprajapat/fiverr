import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const GigCard = ({ item }) => {
    const { img, pp, username, desc, star, price } = item;
    return (
        <Link to="/gig/1" className="link">
            <div className="gigCard">
                <img src={img} alt={username} />
                <div className="info">
                    <div className="user">
                        <img src={pp} alt="" />
                        <span>{username}</span>
                    </div>
                    <p>{desc}</p>
                    <div className="star">
                        <img src="./img/star.png" alt="" />
                        <span>{star}</span>
                    </div>
                </div>
                <div className="detail">
                    <img src="./img/heart.png" alt="" />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>
                            $ {price}
                            <sup>99</sup>
                        </h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GigCard