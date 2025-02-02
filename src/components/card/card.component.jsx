import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}`} alt="{props.monster.name}"/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)