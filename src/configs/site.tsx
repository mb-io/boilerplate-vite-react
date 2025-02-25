import AboutPage from '@/pages/about/about'
import ContactPage from '@/pages/contact/contact'
import HomePage from '@/pages/home/home'
import NotFoundPage from '@/pages/not-found/not-found'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  apiBaseURL: 'https://jsonplaceholder.typicode.com',
  name: 'MeteorByte Vite React Boilerplate',
  description:
    'This is a boilerplate build with Vite, React, TypeScript, HeroUI, Zustand, React Router, React Query, Vitest, Testing Library, TailwindCSS, Eslint and Prettier.',
  routes: [
    {
      label: 'Home',
      href: '/',
      component: <HomePage />,
      visibleInNav: true
    },
    {
      label: 'About',
      href: '/about',
      component: <AboutPage />,
      visibleInNav: true
    },
    {
      label: 'Contact',
      href: '/contact',
      component: <ContactPage />,
      visibleInNav: true
    },
    {
      label: 'Page not found',
      href: '/*',
      component: <NotFoundPage />,
      visibleInNav: false
    }
  ],
  links: {
    github: 'https://github.com/mb-io/boilerplate-vite-react'
  }
}
