import React from 'react'
import './style.scss'
const ProjectCard = ({ card }) => {
    const { img, pp, cat, username } = card
    return (
        <div className="projectCard">
            <img src={img} alt="" />
            <div className="info">
                <img src={pp} alt="" />
                <div className="texts">
                    <h2>{cat}</h2>
                    <span>{username}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard