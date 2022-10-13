import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import ErrorComponent from '../common/components/errorFolder/ErrorPage'
import { PATH } from '../common/enum/path'
import { Address } from '../features/address/Address'
import { Login } from '../features/login/Login'
import { Phone } from '../features/phone/Phone'
import { Profile } from '../features/profile/Profile'
import { AppLayout } from '../layout/AppLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/*<Route path="/" element={<Navigate to={PATH.LOGIN} />} />*/}
        <Route path={PATH.PROFILE} element={<Profile />}></Route>
        <Route path={PATH.LOGIN} element={<Login />}></Route>
        <Route path={PATH.ADDRESS} element={<Address />}></Route>
        <Route path={PATH.PHONE} element={<Phone />}></Route>
        <Route path={PATH.ERROR} element={<ErrorComponent />}></Route>
      </Route>
    </Routes>
  )
}

export default App
