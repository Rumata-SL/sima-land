import React from 'react'

import { Outlet } from 'react-router-dom'

import { Header } from '../common/components/header/Header'

export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  )
}
