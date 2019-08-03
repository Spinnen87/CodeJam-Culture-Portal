module.exports = {
  pathPrefix: '/CodeJam-Culture-Portal',
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-lingui',
        short_name: 'starter',
        start_url: '/gatsby-i18n/gatsby-starter-i18next/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-i18next`,
      options: {
        availableLngs: ['en', 'by', 'ru'],
        fallbackLng: 'en',
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 't3cmttpjbdet',
        accessToken: 'BGip5xHp1SlfWvOL5K7fFBQFkKFs9wzpPj-xYLdRkrY',
      },
    },
    'gatsby-plugin-offline',
  ],
};
