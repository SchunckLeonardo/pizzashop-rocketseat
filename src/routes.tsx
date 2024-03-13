import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/dashboards'
import { SignIn } from './pages/auth/sign-in'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/auth',
    element: <SignIn />,
  },
])
