import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Clients from '../pages/Clients';
import Features from '../pages/Features';
import IndustriesOverview from '../pages/IndustriesOverview';
import TechnologiesOverview from '../pages/TechnologiesOverview';
import Finance from '../pages/industries/Finance';
import HealthCare from '../pages/industries/HealthCare';
import Media from '../pages/industries/Media';
import Technnology from '../pages/industries/Technnology';
import Telecommunication from '../pages/industries/Telecommunication';
import Energy from '../pages/industries/Energy';
import Consumer from '../pages/industries/Consumer';
import Transport from '../pages/industries/Transport';
import Careers from '../pages/Carrers';
import Iot from '../pages/Technologies/Iot';
import WebDevelopment from '../pages/Technologies/WebDevelopment';
import BigData from '../pages/Technologies/BigData';
import Ai from '../pages/Technologies/Ai';
import CloudComputing from '../pages/Technologies/CloudComputing';
import Devops from '../pages/Technologies/Devops';

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
        path: 'industries',
        element: <IndustriesOverview />,
      },
      {
        path: 'technologies',
        element: <TechnologiesOverview />,
      },
      {
        path: 'features',
        element: <Features />,
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
        path: 'careers',
        element: <Careers />,
      },
      {
        path: 'technologies/iot',
        element: <Iot />,
      },
      {
        path: 'technologies/web-development',
        element: <WebDevelopment />,
      },
      {
        path: 'technologies/big-data',
        element: <BigData />,
      },
      {
        path: 'technologies/ai',
        element: <Ai />,
      },
      {
        path: 'technologies/cloud-computing',
        element: <CloudComputing />,
      },
      {
        path: 'technologies/devops',
        element: <Devops />,
      },
    ],
  },
]);

export default router;

