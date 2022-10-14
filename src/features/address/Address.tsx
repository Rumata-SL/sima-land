import React, { useState } from 'react'

import PriorityHighTwoToneIcon from '@mui/icons-material/PriorityHighTwoTone'
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { pink } from '@mui/material/colors'
import { useFormik } from 'formik'
import { Navigate } from 'react-router-dom'

import { addressTC } from '../../bll/reducers/appReducer'
import { useAppDispatch, useAppSelector } from '../../bll/types/types'
import { PATH } from '../../common/enum/path'
import { styleBtn } from '../style/styleBtn'
import style from '../style/StyleForFeatures.module.css'

type FormikErrorType = {
  country?: string
  city?: string
  street?: string
  house?: string
}

export const Address = () => {
  const dispatch = useAppDispatch()
  const isAddress = useAppSelector(state => state.app.isAddress)

  const formik = useFormik({
    initialValues: {
      country: '',
      city: '',
      street: '',
      house: '',
    },
    validate: values => {
      const errors: FormikErrorType = {}

      if (!values.country) {
        errors.country = '⚠ Введите страну'
      } else if (!/^[A-ZА-ЯЁ]+$/i.test(values.country)) {
        errors.country = '⚠ Название страны должно состоять из букв...'
      } else if (values.country.length <= 2) {
        errors.country = '⚠ Название страны должно быть больше 2 символов...'
      }
      if (!values.city) {
        errors.city = '⚠ Введите город'
      } else if (!/^[A-ZА-ЯЁ]+$/i.test(values.city)) {
        errors.city = '⚠ Название города должно состоять из букв...'
      } else if (values.city.length <= 2) {
        errors.city = '⚠ Название города должно быть больше 2 символов...'
      }

      return errors
    },
    onSubmit: values => {
      dispatch(addressTC(values.country, values.city, true))
      formik.resetForm()
    },
  })

  if (isAddress) {
    return <Navigate to={PATH.PHONE} />
  }

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={formik.handleSubmit}>
        <div className={style.title}>Адрес</div>
        <FormControl variant="outlined">
          <InputLabel color="primary">страна</InputLabel>
          <OutlinedInput
            id="country"
            type="country"
            label={'страна'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('country')}
            endAdornment={
              <InputAdornment position="end" title="Обязательное поле">
                <IconButton color={'primary'}>
                  <PriorityHighTwoToneIcon sx={{ color: pink[500] }} fontSize={'small'} />
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.errors.country && formik.touched.country && (
            <div className={style.countryError}>{formik.errors.country}</div>
          )}
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel color="primary">город</InputLabel>
          <OutlinedInput
            id="city"
            type="city"
            label={'город'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('city')}
            endAdornment={
              <InputAdornment position="end" title="Обязательное поле">
                <IconButton color={'primary'}>
                  <PriorityHighTwoToneIcon sx={{ color: pink[500] }} fontSize={'small'} />
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.errors.city && formik.touched.city && (
            <div className={style.cityError}>{formik.errors.city}</div>
          )}
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel color="primary">улица</InputLabel>
          <OutlinedInput
            id="street"
            type="street"
            label={'улица'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('street')}
            endAdornment={
              <InputAdornment position="end" title="Необязательное поле">
                <IconButton color={'primary'}>
                  <PriorityHighTwoToneIcon color="action" fontSize={'small'} />
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.errors.street && formik.touched.street && (
            <div className={style.streetError}>{formik.errors.street}</div>
          )}
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel color="primary">дом</InputLabel>
          <OutlinedInput
            id="house"
            type="house"
            label={'дом'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('house')}
            endAdornment={
              <InputAdornment position="end" title="Необязательное поле">
                <IconButton color={'primary'}>
                  <PriorityHighTwoToneIcon color="action" fontSize={'small'} />
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.errors.house && formik.touched.house && (
            <div className={style.houseError}>{formik.errors.house}</div>
          )}
        </FormControl>

        <Button style={styleBtn} variant="contained" type="submit">
          Продолжить
        </Button>
      </form>
    </div>
  )
}
