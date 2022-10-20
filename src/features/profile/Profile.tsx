import React, { FC } from 'react'

import { Avatar, Button } from '@mui/material'
import { Navigate } from 'react-router-dom'

import { logOut } from '../../reducers/appReducer'
import { selectApp } from '../../selectors/selectors'
import { withRedirectIfBlank } from '../../utils/hoc/WithRedirect'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/customHooks'
import style from '../style/StyleForFeatures.module.css'

type ProfilePropsType = {
  path: string
}
const Profile: FC<ProfilePropsType> = props => {
  const { path } = props

  const { isInitialized, login } = useAppSelector(selectApp)

  const dispatch = useAppDispatch()

  const logOutHandler = () => {
    dispatch(logOut())
  }

  if (!isInitialized) {
    return <Navigate to={path}></Navigate>
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

export default withRedirectIfBlank()(Profile)
