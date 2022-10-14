import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../../bll/types/types'
import { PATH } from '../../common/enum/path'

export const Profile = () => {
  const isInitialized = useAppSelector(store => store.app.isInitialized)

  if (!isInitialized) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Profile</h1>
    </div>
  )
}
