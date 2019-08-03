import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#f5f5f5',
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const Footer = ({ siteTitle }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Container>
          <Typography variant="subtitle1" align="center" gutterBottom>
            CodeJam Culture Portal
          </Typography>
          <Typography variant="subtitle2" align="center" color="textSecondary" component="p">
            Built with love by the Dream team.
          </Typography>
        </Container>
      </footer>

    </React.Fragment >
  )
};

export default Footer;
