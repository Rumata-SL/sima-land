import React from 'react'

import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { useFormik } from 'formik'

import style from './Address.module.css'

type FormikErrorType = {
  country?: string
  city?: string
  street?: string
  house?: string
}

const styleBtn = {
  height: '50px',
  marginTop: '20px',
  borderRadius: '30px',
  fontSize: '18px',
}

export const Address = () => {
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
        errors.country = 'Введите страну'
      } else if (values.country.length >= 2) {
        errors.country = 'Логин должен быть больше 2 символов...'
      }
      if (!values.city) {
        errors.city = 'Введите страну'
      } else if (values.city.length >= 2) {
        errors.city = 'Логин должен быть больше 2 символов...'
      }

      return errors
    },
    onSubmit: values => {},
  })

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
