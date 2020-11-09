import React from 'react';

const ConceptsPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/concepts',
			component: React.lazy(() => import('./ConceptsPage'))
		}
	]
};

export default ConceptsPageConfig;
