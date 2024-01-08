import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './component/Menu'
import { ToastContainer } from 'react-toastify'
import Main from './component/Main'
import Editor from './component/Editor'
import Pnf from './component/Pnf'

function App() {
  return (
    <BrowserRouter>
          <Menu/>
          <ToastContainer autoClose={4000} position='top-right' />
          <Routes>
              <Route path={`/`} element={<Main/>} />
              <Route path={`/editor`} element={<Editor/>} />
              <Route path={`/*`} element={<Pnf/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
