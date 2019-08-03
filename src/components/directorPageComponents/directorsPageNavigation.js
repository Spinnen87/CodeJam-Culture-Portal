import React from 'react';

const Navigation = () => {
    return (
        <div className={'navigation'}>
            <a className={'navigation-link'} href="#timeline"><i className="fas fa-stream"></i></a>
            <a className={'navigation-link'} href="#youtube"><i className="fab fa-youtube"></i></a>
            <a className={'navigation-link'} href="#works"><i className="fas fa-list"></i></a>
            <a className={'navigation-link'} href="#gallery"><i className="far fa-images"></i></a>
            <a className={'navigation-link'} href="#map"><i className="fas fa-map-marker-alt"></i></a>
        </div>
    )
}

export default Navigation;