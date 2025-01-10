import { lazy } from 'react'

const NatiqPage = lazy(() => import('src/pages/natiq/index'))
const AboutPage = lazy(() => import('src/pages/about/index'))
const HomePage = lazy(() => import('src/pages/home/index'))

export const routes = [
  {
    Component: HomePage,
    title: 'Home',
    index: true,
    path: '/',
  },
  {
    Component: AboutPage,
    title: 'About',
    path: '/about',
  },
  {
    Component: NatiqPage,
    title: 'Natiq',
    path: '/natiq',
  },
]
