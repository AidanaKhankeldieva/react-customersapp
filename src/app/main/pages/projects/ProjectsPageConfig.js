import React from 'react';

const ProjectsPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/projects',
			component: React.lazy(() => import('./ProjectsPage'))
		}
	]
};

export default ProjectsPageConfig;
