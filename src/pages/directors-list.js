import { graphql } from 'gatsby';
import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import i18next from 'i18next';
import Layout from '../components/layout';
import List from '../components/directorsList';

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
            <h1>{t('List of Directors')}</h1>
            <input
              type="search"
              placeholder={t('Placeholder')}
              onChange={(e) => this.searchHandler(e)}
            />
            {this.state.items && <List items={this.state.items} error={t('Not Found')} />}
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
