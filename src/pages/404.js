import React from 'react';
import { graphql } from 'gatsby';
import { withI18next } from 'gatsby-plugin-i18next';
import { I18n } from 'react-i18next';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <I18n>
    {t => (
      <Layout>
        <h1>{t('Wrong url')}</h1>
        <p>{t("Wrong url message")}</p>
      </Layout>
    )}
  </I18n>
);
export default withI18next()(NotFoundPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
