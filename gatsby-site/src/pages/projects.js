import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Gallery from '../components/gallery'

function Projects() {
	return (
		<Layout>
			<SEO
				title="Rockwall Landscaping Design: Residential Landscapers"
				description="Looking for the best custom landscaping design company in Texas? Turn to the professionals at Perspectiv Gardens in Rockwall!"
			/>
			<Gallery />
		</Layout>
	)
}

export default Projects
