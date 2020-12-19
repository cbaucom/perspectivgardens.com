require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: `Perspectiv Gardens`,
		description: `Perspectiv Gardens is an Award-Winning landscaping company based in Rockwall, Texas. With almost 20 years of experience, you can count on us to perform the kind of the work that will leave your neighbors in awe.`,
		author: `@chris__baucom`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/data/services`,
				name: 'services',
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [],
			},
		},
		{
			resolve: `gatsby-source-drive`,
			options: {
				folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
				key: process.env.GOOGLE_KEY,
				serviceAccountEmail: process.env.GOOGLE_SA_EMAIL,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GA_ID,
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Perspectiv Gardens`,
				short_name: `PerspectivGardens`,
				start_url: `/`,
				background_color: `#005826`,
				theme_color: `#005826`,
				display: `standalone`,
				icon: `src/images/PG_SquareLogo_512x512.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
