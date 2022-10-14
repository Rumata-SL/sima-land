import React, { useEffect, useState } from 'react'

import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { useFormik } from 'formik'
import {
  MuiTelInput,
  MuiTelInputContinent,
  MuiTelInputInfo,
  MuiTelInputCountry,
  matchIsValidTel,
} from 'mui-tel-input'
import { Navigate } from 'react-router-dom'

import { verifiedTC } from '../../bll/reducers/appReducer'
import { PATH } from '../../common/enum/path'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/customHooks'
import { styleBtn } from '../style/styleBtn'
import style from '../style/StyleForFeatures.module.css'

type FormikErrorType = {
  code?: string
}

export const Phone = () => {
  const dispatch = useAppDispatch()
  const { isInitialized, isVerified } = useAppSelector(state => state.app)

  const [value, setValue] = useState<string>('')

  useEffect(() => {}, [value])

  // получает 4 последние цифры номера
  const getDigits = (str: string) => {
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

      if (getDigits(value) !== values.code) {
        errors.code = '⚠ Не верный код'
      }

      return errors
    },
    onSubmit: values => {
      dispatch(verifiedTC(true, true))
      formik.resetForm()
    },
  })

  const handleChange = (newValue: string, info: MuiTelInputInfo) => {
    // info - информация о номере телефона
    setValue(newValue)
  }

  const continents: MuiTelInputContinent[] = ['EU']
  const excludedCountries: MuiTelInputCountry[] = ['UA', 'DE', 'EC']

  const getCodeHandler = () => {
    alert(`Код подтверждения ${getDigits(value)}`)
  }

  if (isInitialized && isVerified) {
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
            preferredCountries={['RU', 'BY', 'KZ']}
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

        <FormControl variant="outlined" style={{ marginTop: '30px' }}>
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

        <Button
          style={styleBtn}
          variant="contained"
          type="submit"
          disabled={!matchIsValidTel(value)}
        >
          Завершить регистрацию
        </Button>
      </form>
    </div>
  )
}
