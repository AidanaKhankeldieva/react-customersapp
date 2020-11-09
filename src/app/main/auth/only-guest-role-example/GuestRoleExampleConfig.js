import { authRoles } from 'app/auth';
import GuestRoleExample from './GuestRoleExample';

const GuestRoleExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.onlyGuest, // ['guest']
	routes: [
		{
			path: '/auth/guest-role-example',
			component: GuestRoleExample
		},
		{
			path: '/enrollment',
			component: GuestRoleExample
		},
	]
};

export default GuestRoleExampleConfig;
