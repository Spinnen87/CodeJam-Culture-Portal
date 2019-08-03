import React from 'react';
import { Language } from 'gatsby-plugin-i18next';
import Button from '@material-ui/core/Button';

const Switcher = ({ changeLng, lng, availableLngs }) => (
  <React.Fragment>
  {availableLngs.map(value => (
    <Button 
      key={value}
      color="inherit"
      onClick={() => changeLng(value)}
      style={{
          textDecoration: value === lng ? 'underline' : 'none',
      }}>
       {value}
    </Button>
  ))}
</React.Fragment>
);

export default props => (
  <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
);
