import { Navigate, useRoutes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// layouts
import SiteLayout from './layouts/SiteLayout';

// pages
import LandingPage from './pages/LandingPage';

import Home from './pages/Home';
import WhatsNew from './pages/WhatsNew';

import i18n from './locales/i18n';

// ----------------------------------------------------------------------

const language = () => i18n.language

export default function Router() {
  const { t } = useTranslation('translation')
  return useRoutes([
    {
        path: `/${language()}`,
        element: <SiteLayout />,
        children: [
            { path: `home`, element: <Home/>},
            { path: `whatsnew`, element: <WhatsNew/>}
        ]
    },
    {
      path: '/', element: <LandingPage />,
    },
    { path: '*', element: <LandingPage /> }
  ]);
}
