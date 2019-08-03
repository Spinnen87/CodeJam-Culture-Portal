import React from 'react';
import { Link } from 'gatsby-plugin-i18next';

export default function DaysAuthor(props) {
    return (<div>
        <h2>{props.title}</h2>
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="http://xn--80alhdjhdcxhy5hl.xn--p1ai/sites/zhurmir/files/authors/kusachkov_vladimir.jpg" className="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.author}</h5>
                        <p className="card-text">{props.authorDescription}</p>
                        <Link to={'/cvetkov'}>
                            <button>{props.btn}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};

