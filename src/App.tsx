import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Router } from './routes'

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster richColors />
      <RouterProvider router={Router} />
    </HelmetProvider>
  )
}
