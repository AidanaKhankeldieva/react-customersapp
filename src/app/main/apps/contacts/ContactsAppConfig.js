import React from 'react';
import { Redirect } from 'react-router-dom';

const ContactsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/students/:id',
			component: React.lazy(() => import('./ContactsApp'))
		},
		{
			path: '/apps/students',
			component: () => <Redirect to="/apps/students/all" />
		}
	]
};

export default ContactsAppConfig;
