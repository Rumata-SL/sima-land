import React from 'react'

import { Navigate } from 'react-router-dom'

import { PATH } from '../../common/enum/path'
import { useAppSelector } from '../../utils/hooks/customHooks'

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
