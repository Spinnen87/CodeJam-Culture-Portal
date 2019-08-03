import React from 'react';
import { translate } from 'react-i18next';
import { Head } from 'gatsby-plugin-i18next';
import Header from './header';


const Layout = ({ children, t }) => {
  return (
    <>
      <Head hreflang>
        <title>{t('Site title')}</title>
        <meta name="description" content="Sample" />
        <meta name="keywords" content="Film directors, the Rolling Scope, CodeJam Culture Portal" />
      </Head>
      <Header siteTitle={t('Site title', 'List of Directors')} listOfArch={t('List of Directors')} about={t('About us')} />
      <div className="container">
        {children}
      </div>
    </>
  );
}

export default translate()(Layout);
