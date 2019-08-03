import React from 'react';

const Navigation = (props) => {
    const { timeLine, table, map, gallery } = props;
    return (
        <ul>
            <li><a href="#timeline">{timeLine}</a></li>
            <li><a href="#youtube">Youtube</a></li>
            <li><a href="#works">{table}</a></li>
            <li><a href="#gallery">{gallery}</a></li>
            <li><a href="#map">{map}</a></li>
        </ul>
    )
}

export default Navigation;