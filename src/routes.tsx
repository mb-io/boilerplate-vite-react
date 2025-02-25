import { Route, Routes } from 'react-router-dom'
import { siteConfig } from './configs/site'

function AppRoutes() {
  return (
    <Routes>
      {siteConfig.routes.map((route) => (
        <Route element={route.component} key={route.href} path={route.href} />
      ))}
    </Routes>
  )
}

export default AppRoutes
