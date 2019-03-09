module.exports = {
	siteMetadata: {
		title: `Spenny`,
		description: `Creating a digital solution that incentivises frequent diners with high-end restaurants and bars through our mobile app.`,
		author: `Spenny`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-styled-components`
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: 'Ubuntu'
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-135760436-1'
			}
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/images/favicon.png',
				version: '1.0',
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					favicons: true,
					firefox: true
				}
			}
		},
		`gatsby-plugin-netlify`
	]
};
