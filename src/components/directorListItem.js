import React from 'react';

const ListItem = ({ title, avatar, birthDate, deathDate, description }) => {
    return (
        <li>
            <img src={avatar} alt="director's photo" />
            <div>
                <h2>{title}</h2>
                <p>{`${birthDate}-${deathDate}`}</p>
                <p>{description}</p>
            </div>
        </li>
    )
};

export default ListItem;