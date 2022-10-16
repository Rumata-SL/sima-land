import React from 'react'

import { Avatar, Button } from '@mui/material'
import { Navigate } from 'react-router-dom'

import { logOut } from '../../bll/reducers/appReducer'
import { PATH } from '../../common/enum/path'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/customHooks'
import style from '../style/StyleForFeatures.module.css'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const { login, isInitialized } = useAppSelector(store => store.app)

  const logOutHandler = () => {
    dispatch(logOut())
  }

  if (!isInitialized) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <h3 className={style.title}>Профиль</h3>
        <div className={style.avatarBlock}>
          <Avatar src="/broken-image.jpg" style={{ width: 200, height: 200 }} />
          <h4>{login}</h4>
        </div>

        <div>
          <Button onClick={logOutHandler}>Log out</Button>
        </div>
      </div>
    </div>
  )
}
