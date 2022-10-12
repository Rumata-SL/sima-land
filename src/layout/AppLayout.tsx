import React from 'react'

import '../app/App.css'

import { Outlet } from 'react-router-dom'

import { Header } from '../common/components/header/Header'

export const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  )
}
