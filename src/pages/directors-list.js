import { graphql } from 'gatsby';
import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import i18next from 'i18next';
import Layout from '../components/layout';
import DirectorsList from '../components/directorsList';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.items = props.data.allContentfulDirector.edges;
    this.t = props.t;
    this.state = {
      items: null,
    }
  }

  componentDidMount() {
    const { items } = this;
    const filteredItems = items.filter(item => item.node.language == i18next.language);
    this.items = filteredItems;
    this.setState({ items: filteredItems });
  }

  searchHandler(e) {
    const { items } = this;
    const filteredItems = items.filter(item => item.node.title.concat(item.node.birthPlace).toLowerCase().includes(e.target.value.toLowerCase()));
    filteredItems.length ? this.setState({ items: filteredItems }) : this.setState({ items: [] });
  }

  render() {
    return (
      <I18n>
        {t => (
          <Layout>
            <Typography variant="h6" margin='dense' gutterBottom>
              {t('List of Directors')}
            </Typography>


            <Grid item xs={6}>
              <TextField
                id="standard-search"
                label={t('Placeholder')}
                type="search"
                margin="dense"
                variant="outlined"
                fullWidth="true"
                onChange={(e) => this.searchHandler(e)}
              />

              {this.state.items && <DirectorsList items={this.state.items} error={t('Not Found')} />}
            </Grid>
          </Layout>
        )}
      </I18n>
    )
  }
}

export default withI18next()(SearchPage);

export const query = graphql`
  query($lng: String!) {
      locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
      ...TranslationFragment
      }
      allContentfulDirector {
        edges {
          node {
            avatar
            birthDate
            birthPlace
            deathDate
            description
            language
            title  
            path
          }
        }
      }
  }
`;
