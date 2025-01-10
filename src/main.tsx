import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { Suspense } from 'react'

import { Loading } from './components'
import App from './App'

import 'antd/dist/reset.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading />}>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Suspense>,
)
