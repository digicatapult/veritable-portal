import React from 'react'
import { Routes, Route, createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Issue from '../pages/Issue'

export const router = createBrowserRouter([
  { path: '*', Component: Home },
  { path: '/issue', Component: Issue },
])

export default function Router() {
  return (
    <Routes>
      <Route exec path={'/'} element={<Home />} />
      <Route exec path={'/issue'} element={<Issue />} />
    </Routes>
  )
}
