import React from 'react'
import { Routes, Route, createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Issue from '../pages/Issue'
import Receive from '../pages/Receive'
import Spinner from '../components/Spinner'

export const router = createBrowserRouter([
  { path: '*', Component: Home },
  { path: '/issue', Component: Issue },
  { path: '/receive', Component: Receive },
  { path: '/credential', Component: Spinner },
])

export default function Router() {
  return (
    <Routes>
      <Route exec path={'/'} element={<Home />} />
      <Route exec path={'/issue'} element={<Issue />} />
      <Route exec path={'/receive'} element={<Receive />} />
      <Route path={'/credential'} />
    </Routes>
  )
}
