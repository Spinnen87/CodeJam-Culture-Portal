import React from "react";
import { graphql } from "gatsby";
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import GoogleMap from '../components/directorPageComponents/googleMap';
import TimeLine from '../components/directorPageComponents/timeline';
import Youtube from '../components/directorPageComponents/youtube';
import Layout from '../components/layout';
import Gallery from '../components/directorPageComponents/gallery';
import WorksTable from '../components/directorPageComponents/worksTable';
import Navigation from '../components/directorPageComponents/directorsPageNavigation';
import OnTop from '../components/directorPageComponents/onTop';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import lightBlue from '@material-ui/core/colors/lightBlue';

const useStyles = makeStyles(theme => ({
  grid: {
    margin: `${theme.spacing(7)}px auto`
  },
  gridTitel: {
    marginBottom: `${theme.spacing(3)}px`
  },
  title: {
    fontWeight: 'bold',
    marginTop: '20px',
  }
}));

function DirectorTemplate(props) {
  const { title, description, birthDate, deathDate, avatar, video, activity, googleMaps, gallery, works } = props.data.contentfulDirector;
  const classes = useStyles();
  return (
    <I18n>
      {t => (
        <Layout>
          <Grid container spacing={1} >
            <Grid item xs={12} md={12}>
              <Grid container spacing={5} className={classes.gridTitel} >
                <Grid item xs={12} md={3}>
                  <CardMedia component="img" alt={`${title}`} height="250" image={avatar} title={`${title}`} />
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography className={classes.title} variant="h4" gutterBottom id={'title'}>{`${title}`}</Typography>
                  <Typography variant="subtitle1" gutterBottom>{`${birthDate}-${deathDate}`}</Typography>
                  <Typography variant="subtitle1" gutterBottom>{description}</Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid className={classes.grid}><TimeLine data={activity.activity} /></Grid>
              <Grid className={classes.grid}><Youtube data={video} /></Grid>
              <Grid className={classes.grid}><WorksTable data={works.works} /></Grid>
              <Grid className={classes.grid}><Gallery data={gallery.gallery} /></Grid>
              <Grid className={classes.grid}><GoogleMap data={googleMaps.googleMaps} /></Grid>
            </Grid>
            <Navigation />
          </Grid>
          <OnTop />
        </Layout>
      )
      }
    </I18n>
  )
}

export default withI18next()(DirectorTemplate);

export const pageQuery = graphql`
query($lng: String!, $pathToPage: String!) { 
    contentfulDirector(language: { eq: $lng }, path: {eq: $pathToPage}) {
      title
      description
      birthDate
      birthPlace
      deathDate
      deathPlace
      avatar
      video
      language
      activity {
        activity {
          date
          description
          place
        }
      }
      googleMaps {
        googleMaps {
          name
          title
          locationsCoords {
            lat
            lng
          }
        }
      }
      gallery {
        gallery
      }
      works {
        works {
          date
          name
        }
      }
    }
locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
  ...TranslationFragment
  }
}
`;