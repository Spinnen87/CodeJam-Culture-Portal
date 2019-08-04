import React from 'react';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Developers from '../components/developers';

const about = () => {
    return (
        <I18n>
            {t => (
                <Layout>
                    <Developers developers={t('Developers')} aboutDevelopers={t('About developers')} />
                </Layout>
            )}
        </I18n>
    );
}

export default withI18next()(about);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng } }) {
      ...TranslationFragment
    }
  }
`;