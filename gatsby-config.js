module.exports = {
	siteMetadata: {
		title: `Spenny`,
		description: `Spenny Desc`,
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
			  logo: "./src/images/favicon.png",
			  version: '1.0',
			  icons: {
				android: true,
				appleIcon: true,
				appleStartup: true,
				favicons: true,
				firefox: true
			  }
			}
		  }
	]
};
