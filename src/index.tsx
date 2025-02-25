import React from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import '@/globals.css'
import DefaultLayout from './layouts/default/default'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './provider'
import AppRoutes from './routes'
import axios from 'axios'
import { siteConfig } from './configs/site'

axios.defaults.baseURL = siteConfig.apiBaseURL
// axios.defaults.headers.post['x-api-key'] = import.meta.env.VITE_API_KEY

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
