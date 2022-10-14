import React from 'react'

import { Logo } from '../logo/Logo'

import style from './Header.module.css'

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.svgBlock}>
        <a href={'https://www.sima-land.ru/'} target={'_blank'} rel="noreferrer">
          <Logo />
        </a>
      </div>
    </div>
  )
}
