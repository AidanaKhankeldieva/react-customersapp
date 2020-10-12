import React from 'react';
import { Redirect } from 'react-router-dom';

const AcademyAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
            path     : '/courses/:courseId/:subId?',
            component: React.lazy(() => import('./course/Course'))
        },
        /*{
            path     : '/course/:courseId',
            component: React.lazy(() => import('./courses/CoursesSub'))
        },*/
        {
            path     : '/courses',
            component: React.lazy(() => import('./courses/Courses'))
        },
		{
            path     : '/ds',
            component: React.lazy(() => import('./courses/Courses'))
        }
	]
};

export default AcademyAppConfig;
