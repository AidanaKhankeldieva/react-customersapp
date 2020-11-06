/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['admin'],
	staff: ['admin', 'instructor'],
	user: ['admin', 'instructor', 'student'],
	onlyGuest: []
};

export default authRoles;
