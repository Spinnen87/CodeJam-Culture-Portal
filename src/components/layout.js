import React from 'react';
import { translate } from 'react-i18next';
import { Head } from 'gatsby-plugin-i18next';
import Header from './header';
import Footer from './footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: 'auto',
  },
}));

const Layout = ({ children, t }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Head hreflang>
        <title>{t('Site title')}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="The information on this portal is dedicated to the Belarusian Union of cinematographers" />
        <meta name="keywords" content="Film directors, the Rolling Scope, CodeJam Culture Portal" />
      </Head>
      <CssBaseline />
      <div className={classes.appContainer}>
        <Header siteTitle={t('Site title')} listOfArch={t('List of Directors')} about={t('About us')} homePage={t('Home Page')} />
        <Container className={classes.mainContent}>{children}</Container>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default translate()(Layout);

