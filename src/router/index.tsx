import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AppLayout } from 'src/components'
import { routes } from './routes'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {routes.map(({ Component, ...restProps }) => (
            <Route
              {...restProps}
              key={restProps.path}
              element={<Component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}
