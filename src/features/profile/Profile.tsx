import React from 'react'

import { Button } from '@mui/material'
import { Navigate, NavLink } from 'react-router-dom'

import { useAppSelector } from '../../bll/types/types'
import { PATH } from '../../common/enum/path'

export const Profile = () => {
  const isInitialized = useAppSelector(store => store.app.isInitialized)

  if (!isInitialized) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <div>
      <NavLink to={PATH.LOGIN} style={{ textDecoration: 'none' }}>
        <Button variant="contained">login</Button>
      </NavLink>
    </div>
  )
}
