import React from 'react';
import { Language } from 'gatsby-plugin-i18next';

const Switcher = ({ changeLng, lng, availableLngs }) => (
  <ul className="navbar-nav">
    {availableLngs.map(value => (
      <li key={value} className="nav-item">
      <button
          style={{
            textDecoration: value === lng ? 'underline' : 'none',
          }}
          className="btn btn-link"
          onClick={() => changeLng(value)}
        >
          {value}
        </button>
      </li>
    ))}
  </ul>
);

export default props => (
  <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
);
