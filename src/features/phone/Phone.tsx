import React, { FC, useEffect, useState } from 'react'

import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { useFormik } from 'formik'
import { MuiTelInput, MuiTelInputInfo, matchIsValidTel } from 'mui-tel-input'
import { Navigate } from 'react-router-dom'

import { verifiedTC } from '../../reducers/appReducer'
import { selectApp } from '../../selectors/selectors'
import { getDigits } from '../../utils/helpers/getDigits'
import { continents, excludedCountries } from '../../utils/helpers/muiTelFunction'
import { withRedirectIfBlank } from '../../utils/hoc/WithRedirect'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/customHooks'
import { styleBtn } from '../style/styleBtn'
import style from '../style/StyleForFeatures.module.css'

type FormikErrorType = {
  code?: string
}

type PhonePropsType = {
  path: string
}
const Phone: FC<PhonePropsType> = props => {
  const { path } = props
  const dispatch = useAppDispatch()
  const { isInitialized, isVerified } = useAppSelector(selectApp)

  const [value, setValue] = useState<string>('')

  useEffect(() => {}, [value])

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

  const getCodeHandler = () => {
    alert(`Код подтверждения ${getDigits(value)}`)
  }

  if (isInitialized && isVerified) {
    return <Navigate to={path}></Navigate>
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

export default withRedirectIfBlank()(Phone)
