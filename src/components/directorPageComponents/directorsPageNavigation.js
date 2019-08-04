import React from 'react';

const Navigation = () => {
    return (
        <ul className={'navigation'}>
            <li><a className={'navItem'} href="#timeline"><i className="fas fa-list-ul"></i></a></li>
            <li><a className={'navItem'} href="#youtube"><i className="fab fa-youtube"></i></a></li>
            <li><a className={'navItem'} href="#works"><i className="fas fa-clipboard-list"></i></a></li>
            <li><a className={'navItem'} href="#gallery"><i className="far fa-images"></i></a></li>
            <li><a className={'navItem'} href="#map"><i className="fas fa-map-marker-alt"></i></a></li>
        </ul>
    )
}

export default Navigation;