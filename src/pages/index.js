import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link } from 'gatsby-plugin-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import Layout from '../components/layout';
import DaysAuthor from '../components/daysAuthor';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import indexImg from "../images/indexImg.jpg";

const CollisionLink = React.forwardRef((props, ref) => (<Link to="/directors-list/" {...props} />));

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
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: "none",
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${indexImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alingItems: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  button: {
    margin: theme.spacing(1),
    textAlign: 'center'
  },
  banerTitel: {
    fontSize: '2em',
    textAlign: 'center',
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <I18n>
      {t => (
        <Layout>
          <main>
            <Paper className={classes.mainFeaturedPost}>
              {<img style={{ display: 'none' }} src={indexImg} alt="background" />}
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom className={classes.banerTitel}>{t('FirstPageTitle')}</Typography>
                    <Button variant="contained" component={CollisionLink} color="secondary" className={classes.button}>
                      {t('List of Directors')}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            <Typography variant="subtitle1" color="inherit" paragraph>{t('Description')}</Typography>
            <DaysAuthor title={t('Days Author')} author={t('Days Author Name')} authorDescription={t('Days Author Description')} btn={t('Button')} />
          </main>
        </Layout>
      )}
    </I18n>
  );
}

export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng } }) {
      ...TranslationFragment
    }
  }
`;
