import React from 'react'
import '../css/card.css'


const Card = ({job, day}) => {
    return (
        <div className="card">
            <p className="word">Job of the day</p>
            <h2 className="heading">be<span className="bullet"></span>nev<span className="bullet"></span>o<span className="bullet"></span>lent</h2>
            <p className="kind">{day}</p>
            <p className="meaning">{job}</p>

            <a href="#" className="learn-more">LEARN MORE</a>
        </div>
    )
} 


export default Card;