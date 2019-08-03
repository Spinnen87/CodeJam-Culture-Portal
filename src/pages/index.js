import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import Layout from '../components/layout';
import Developers from '../components/developers';
import DaysAuthor from '../components/daysAuthor';

const IndexPage = () => {
  return (
    <I18n>
      {t => (
        <Layout>
          <h1>{t('FirstPageTitle')}</h1>
          <p>{t('Description')}</p>
          <DaysAuthor title={t('Days Author')} author={t('Days Author Name')} authorDescription={t('Days Author Description')} btn={t('Button')} />
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
