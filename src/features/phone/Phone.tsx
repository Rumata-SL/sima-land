import React, { useEffect, useState } from 'react'

import PriorityHighTwoToneIcon from '@mui/icons-material/PriorityHighTwoTone'
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { useFormik } from 'formik'
import {
  MuiTelInput,
  MuiTelInputContinent,
  MuiTelInputInfo,
  MuiTelInputCountry,
  matchIsValidTel,
} from 'mui-tel-input'
import { Navigate } from 'react-router-dom'

import { PATH } from '../../common/enum/path'

import style from './Phone.module.css'

type FormikErrorType = {
  code?: string
}

const styleBtn = {
  height: '50px',
  fontSize: '18px',
}

export const Phone = () => {
  const [value, setValue] = useState<string>('')
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {}, [value])

  const changePhone = (str: string) => {
    return str
      .split('')
      .filter(el => el !== ' ')
      .join('')
      .slice(-4)
  }

  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validate: values => {
      const errors: FormikErrorType = {}

      if (changePhone(value) === values.code) {
        setIsVerified(true)
      } else {
        errors.code = '⚠ Не верный код'
      }

      return errors
    },
    onSubmit: values => {
      formik.resetForm()
    },
  })

  const handleChange = (newValue: string, info: MuiTelInputInfo) => {
    setValue(newValue)
  }

  const continents: MuiTelInputContinent[] = ['EU']
  const excludedCountries: MuiTelInputCountry[] = ['UA', 'DE', 'EC']

  const getCodeHandler = () => {
    alert(`Код подтверждения ${changePhone(value)}`)
  }

  if (isVerified) {
    return <Navigate to={PATH.PROFILE} />
  }

  return (
    <div className={style.container}>
      <form onSubmit={formik.handleSubmit} className={style.formContainer}>
        <div className={style.title}>Подтверждение номера</div>
        <FormControl variant="outlined">
          <MuiTelInput
            value={value}
            onChange={handleChange}
            continents={continents}
            excludedCountries={excludedCountries}
            preferredCountries={['RU', 'BE']}
            defaultCountry="RU"
            forceCallingCode
          />
          {!matchIsValidTel(value) && (
            <div className={style.phoneError}>{'Введите' + ' правильный номер'}</div>
          )}
        </FormControl>
        <Button
          style={styleBtn}
          variant="contained"
          onClick={getCodeHandler}
          disabled={!matchIsValidTel(value)}
        >
          Получить код
        </Button>

        <FormControl variant="outlined">
          <InputLabel color="primary">код</InputLabel>
          <OutlinedInput
            id="code"
            type="code"
            label={'код'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('code')}
          />
          {formik.errors.code && formik.touched.code && (
            <div className={style.codeError}>{formik.errors.code}</div>
          )}
        </FormControl>
        <Button style={styleBtn} variant="contained" type="submit">
          Завершить регистрацию
        </Button>
      </form>
    </div>
  )
}
