import React from 'react'
import { BrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import { router } from './routes/Route'

export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
