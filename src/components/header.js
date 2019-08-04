import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import Switcher from './switcher';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import lightBlue from '@material-ui/core/colors/lightBlue';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  toolbarTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    minWidth: '400px',
    fontSize: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      minWidth: '500px',
    },
    marginBottom: '10px',
  },
  toolbarSecondary: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflowX: 'auto',
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    '&:hover': {
      color: lightBlue[600],
    }
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
