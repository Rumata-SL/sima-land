import React from 'react'

import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

import errorImg from '../../../assets/image/404.svg'
import { PATH } from '../../enum/path'

import style from './ErrorPage.module.css'

const ErrorComponent = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <h2 className={style.title}>Ooops!</h2>
        <span className={style.subTitle}>Sorry! Page not found!</span>
        <NavLink to={PATH.PROFILE} style={{ textDecoration: 'none' }}>
          <Button variant="contained">Back to home page</Button>
        </NavLink>
      </div>
      <div>
        <img src={errorImg} alt="error" />
      </div>
    </div>
  )
}

export default ErrorComponent
