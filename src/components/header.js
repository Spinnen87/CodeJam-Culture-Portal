import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import Switcher from './switcher';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: '20px'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header = ({ siteTitle, listOfArch, about, homePage }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg" component="header">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            className={classes.toolbarTitle}
          >
            {siteTitle}
          </Typography>
          <Switcher />
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link to="/" className={classes.toolbarLink} color="secondary">{homePage}</Link>
          <Link to="/directors-list/" className={classes.toolbarLink}>{listOfArch}</Link>
          <Link to="/about/" className={classes.toolbarLink} >{about}</Link>
          <a href="https://github.com/Spinnen87/CodeJam-Culture-Portal" className={classes.toolbarLink} target="_blank">GitHub</a>
        </Toolbar>
      </Container>
    </React.Fragment>
  )
};

export default Header;
