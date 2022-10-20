import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import ErrorComponent from '../common/components/errorFolder/ErrorPage'
import { PATH } from '../common/enum/path'
import Address from '../features/address/Address'
import Login from '../features/login/Login'
import Phone from '../features/phone/Phone'
import Profile from '../features/profile/Profile'
import { AppLayout } from '../layout/AppLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Navigate to={PATH.PROFILE} />} />
        <Route path={PATH.PROFILE} element={<Profile path={'/login/'} />}></Route>
        <Route path={PATH.LOGIN} element={<Login path={'/address/'} />}></Route>
        <Route path={PATH.ADDRESS} element={<Address path={'/phone/'} />}></Route>
        <Route path={PATH.PHONE} element={<Phone path={'/profile'} />}></Route>
        <Route path={PATH.ERROR} element={<ErrorComponent />}></Route>
      </Route>
    </Routes>
  )
}

export default App
