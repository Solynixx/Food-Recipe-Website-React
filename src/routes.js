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
  {
    path: '/inspiration/seasonal-constellations',
    component: React.lazy(() => import('./pages/inspiration/seasonal_constellations/SeasonalConstellations')),
  },
  // add new routes here
];

export default routes;