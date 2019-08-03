import React, { Component } from "react";
import { graphql } from "gatsby";
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import GoogleMap from '../components/directorPageComponents/googleMap';
import TimeLine from '../components/directorPageComponents/timeline';
import Youtube from '../components/directorPageComponents/youtube';
import Layout from '../components/layout';
import Gallery from '../components/directorPageComponents/gallery';
import Table from '../components/directorPageComponents/worksTable';
import Navigation from '../components/directorPageComponents/directorsPageNavigation';
import OnTop from '../components/directorPageComponents/onTop';
import '../style.css';

// const DirectorTemplate = (props) => {
//   const { title, description, birthDate, deathDate, avatar, video, activity, googleMaps, gallery, works } = props.data.contentfulDirector;
//   return (
//     <I18n>
//       {t => (
//         <Layout>
//           <Navigation />
//           <h1 id={'title'}>{title}</h1>
//           <img src={avatar} className="card-img" />
//           <p>{`${birthDate}-${deathDate}`}</p>
//           <h3>{description}</h3>
//           <TimeLine data={activity.activity} />
//           <Youtube data={video} />
//           <Table data={works.works} />
//           <Gallery data={gallery.gallery} />
//           <GoogleMap data={googleMaps.googleMaps} />
//         </Layout>
//       )}
//     </I18n>
//   )
// }

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
      if (pageYOffset> scrollWidth / 2  && !this.state.showOnTopButton) this.showOnTopButton();
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
            <Navigation />
            <h1 id={'title'}>{title}</h1>
            <img src={avatar} className="card-img" />
            <p>{`${birthDate}-${deathDate}`}</p>
            <h3>{description}</h3>
            <TimeLine data={activity.activity} />
            <Youtube data={video} />
            <Table data={works.works} />
            <Gallery data={gallery.gallery} />
            <GoogleMap data={googleMaps.googleMaps} />
            {this.state.showOnTopButton && <OnTop />}
          </Layout>
        )}
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