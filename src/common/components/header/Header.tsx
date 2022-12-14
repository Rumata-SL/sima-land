import React, { useEffect } from 'react'

import { Button } from '@mui/material'

import { logOut } from '../../../reducers/appReducer'
import { selectApp } from '../../../selectors/selectors'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/customHooks'
import { Logo } from '../logo/Logo'

import style from './Header.module.css'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { isInitialized } = useAppSelector(selectApp)

  useEffect(() => {}, [isInitialized])

  const logOutHandler = () => {
    dispatch(logOut())
  }

  return (
    <div className={style.container}>
      <div className={style.svgBlock}>
        <a href={'https://www.sima-land.ru/'} target={'_blank'} rel="noreferrer">
          <Logo />
        </a>
      </div>
      {isInitialized && (
        <div>
          <Button variant="text" onClick={logOutHandler}>
            log out
          </Button>
        </div>
      )}
    </div>
  )
}
