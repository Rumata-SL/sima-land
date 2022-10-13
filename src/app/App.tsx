import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { PATH } from '../common/enum/path'
import { Address } from '../features/address/Address'
import { Login } from '../features/login/Login'
import { Phone } from '../features/phone/Phone'
import { AppLayout } from '../layout/AppLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/*<Route path="/" element={<Navigate to={PATH.LOGIN} />} />*/}
        <Route path={PATH.LOGIN} element={<Login />}></Route>
        <Route path={PATH.ADDRESS} element={<Address />}></Route>
        <Route path={PATH.PHONE} element={<Phone />}></Route>
      </Route>
    </Routes>
  )
}

export default App
