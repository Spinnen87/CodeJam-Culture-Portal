module.exports = {
  pathPrefix: '/CodeJam-Culture-Portal',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CodeJam-Culture-Portal',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
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
        debug: true,
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
