import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Clients from '../pages/Clients';
import Finance from '../pages/industries/Finance';
import HealthCare from '../pages/industries/HealthCare';
import Media from '../pages/industries/Media';
import Technnology from '../pages/industries/Technnology';
import Telecommunication from '../pages/industries/Telecommunication';
import Energy from '../pages/industries/Energy';
import Consumer from '../pages/industries/Consumer';
import Transport from '../pages/industries/Transport';
import Carrers from '../pages/Carrers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'industries/finance',
        element: <Finance />,
      },
      {
        path: 'industries/healthcare',
        element: <HealthCare />,
      },
      {
        path: 'industries/media',
        element: <Media />,
      },
      {
        path: 'industries/technology',
        element: <Technnology />,
      },
      {
        path: 'industries/telecommunication',
        element: <Telecommunication />,
      },
      {
        path: 'industries/energy',
        element: <Energy />,
      },
      {
        path: 'industries/consumer',
        element: <Consumer />,
      },
      {
        path: 'industries/transport',
        element: <Transport />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'clients',
        element: <Clients />,
      },
      {
        path: 'carrers',
        element: <Carrers />,
      },
    ],
  },
]);

export default router;

