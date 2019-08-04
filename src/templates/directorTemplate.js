import React, { Component } from "react";
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
import '../style.css';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';


class DirectorTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOnTopButton: false
    }
  }

  componentDidMount() {
    const scrollWidth = document.documentElement.scrollWidth;
    window.addEventListener('scroll', () => {
      if (pageYOffset > scrollWidth / 2 && !this.state.showOnTopButton) this.showOnTopButton();
      else if (this.state.showOnTopButton && pageYOffset < scrollWidth / 2) this.hideOnTopButton();
    });
  }

  showOnTopButton() {
    this.setState({ showOnTopButton: true });
  }

  hideOnTopButton() {
    this.setState({ showOnTopButton: false });
  }

  render() {
    const { title, description, birthDate, deathDate, avatar, video, activity, googleMaps, gallery, works } = this.props.data.contentfulDirector;

    return (
      <I18n>
        {t => (
          <Layout>
            <Grid container spacing={1}>
              <Grid item xs={12} md={10}>
                <Grid container spacing={5}>
                  <Grid item xs={12} md={3}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="250"
                      image={avatar}
                      title="Contemplative Reptile"
                    />
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography variant="h4" gutterBottom id={'title'}>
                      {title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {`${birthDate}-${deathDate}`}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {description}
                    </Typography>
                  </Grid>
                </Grid>
                <TimeLine data={activity.activity} />
                <Youtube data={video} />
                <WorksTable data={works.works} />
                <Gallery data={gallery.gallery} />
                <GoogleMap data={googleMaps.googleMaps} />
              </Grid>
              <Hidden xsDown>
                <Grid item md={2} >
                  <ListSubheader>
                    <Typography variant="subtitle1">
                      {t('Director content')}
                    </Typography>
                    <Navigation timeLine={t('TimeLine')} table={t('Table')} map={t('Map')} gallery={t('Gallery')} />
                  </ListSubheader>
                </Grid>
              </Hidden>
            </Grid>
            {this.state.showOnTopButton && <OnTop />}
          </Layout>
        )
        }
      </I18n>
    )
  }
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
`