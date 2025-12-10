import React from 'react';

const routes = [
  {
    path: '/',
    component: React.lazy(() => import('./pages/home/Home')),
  },
  {
    path: '/inspiration/stellar-tips',
    component: React.lazy(() => import('./pages/inspiration/stellar_tips/StellarTips')),
  },
  // add new routes here, for example:
  // { path: '/about', component: React.lazy(() => import('./pages/about/About')) },
];

export default routes;