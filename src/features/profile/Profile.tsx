import React from 'react'

import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { PATH } from '../../common/enum/path'

export const Profile = () => {
  return (
    <div>
      <NavLink to={PATH.LOGIN} style={{ textDecoration: 'none' }}>
        <Button variant="contained">login</Button>
      </NavLink>
    </div>
  )
}
