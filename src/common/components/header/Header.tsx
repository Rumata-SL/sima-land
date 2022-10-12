import React from 'react'

import { Logo } from '../logo/Logo'

import style from './Header.module.css'

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.svgBlock}>
        <Logo />
      </div>
    </div>
  )
}
