import React from 'react';
import Users from './pages/User/Users.jsx';
import Articles from './pages/Article/Articles.jsx';
import Infos from './pages/Info/Infos.jsx';
import Courses from './pages/Course/Courses.jsx';

export default [
  { path: '/', element: <Users /> },
  { path: '/users', element: <Users /> },
  { path: '/courses', element: <Courses /> },
  { path: '/articles', element: <Articles /> },
  { path: '/infos', element: <Infos /> },
];
