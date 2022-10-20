import React, { FC, useCallback, useState } from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { useFormik } from 'formik'
import { Navigate } from 'react-router-dom'

import { loginTC } from '../../reducers/appReducer'
import { selectApp } from '../../selectors/selectors'
import { withRedirectIfBlank } from '../../utils/hoc/WithRedirect'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/customHooks'
import { styleBtn } from '../style/styleBtn'
import style from '../style/StyleForFeatures.module.css'

type FormikErrorType = {
  login?: string
  email?: string
  password?: string
  confirmPassword?: string
}

type LoginPropsType = {
  path: string
}

const Login: FC<LoginPropsType> = props => {
  const { path } = props

  const dispatch = useAppDispatch()
  const { isLoggedIn } = useAppSelector(selectApp)

  const [valuePass, setValuePass] = useState({
    password: '',
    showPass: false,
  })
  const [valuePassConfirm, setValuePassConfirm] = useState({
    passwordConfirm: '',
    showPassConfirm: false,
  })

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: values => {
      const errors: FormikErrorType = {}

      if (!values.login) {
        errors.login = '⚠ Введите логин'
      } else if (values.login.length <= 5) {
        errors.login = '⚠ Логин должен быть больше 5 символов...'
      }
      if (!values.email) {
        errors.email = '⚠ Введите почту'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '⚠ Неверный адрес электронной почты'
      }
      if (!values.password) {
        errors.password = '⚠ Введите пароль'
      } else if (values.password.length <= 7) {
        errors.password = '⚠ Пароль должен быть больше 7 символов...'
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = '⚠ Повторите пароль'
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = '⚠ Пароль и пароль подтверждения не совпадают'
      }

      return errors
    },
    onSubmit: values => {
      dispatch(loginTC(values.login, values.email, true))
      formik.resetForm()
    },
  })

  const clickShowPass = useCallback(() => {
    setValuePass({
      ...valuePass,
      showPass: !valuePass.showPass,
    })
  }, [valuePass])

  const clickShowConfirmPass = useCallback(() => {
    setValuePassConfirm({
      ...valuePassConfirm,
      showPassConfirm: !valuePassConfirm.showPassConfirm,
    })
  }, [valuePassConfirm])

  const MouseDownPass = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  if (isLoggedIn) {
    return <Navigate to={path}></Navigate>
  }

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={formik.handleSubmit}>
        <div className={style.title}>Регистрация</div>

        <FormControl variant="outlined">
          <InputLabel color="primary">логин</InputLabel>
          <OutlinedInput
            id="login"
            type="login"
            label={'логин'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('login')}
          />
          {formik.errors.login && formik.touched.login && (
            <div className={style.loginError}>{formik.errors.login}</div>
          )}
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel color="primary">почта</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            label={'почта'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && formik.touched.email && (
            <div className={style.emailError}>{formik.errors.email}</div>
          )}
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel color={'primary'}>пароль</InputLabel>
          <OutlinedInput
            id="password"
            type={valuePass.showPass ? 'text' : 'password'}
            label={'пароль'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('password')}
            autoComplete="on"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={clickShowPass} onMouseDown={MouseDownPass} color={'primary'}>
                  {valuePass.showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.errors.password && formik.touched.password && (
            <div className={style.passwordError}>{formik.errors.password}</div>
          )}
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel color={'primary'}>повторите пароль</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            type={valuePassConfirm.showPassConfirm ? 'text' : 'password'}
            label={'повторите пароль'}
            className={style.input}
            color={'primary'}
            {...formik.getFieldProps('confirmPassword')}
            autoComplete="on"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={clickShowConfirmPass}
                  onMouseDown={MouseDownPass}
                  color={'primary'}
                >
                  {valuePassConfirm.showPassConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className={style.confirmPasswordError}>{formik.errors.confirmPassword}</div>
          )}
        </FormControl>

        <Button style={styleBtn} variant="contained" type="submit">
          Продолжить
        </Button>
      </form>
    </div>
  )
}

export default withRedirectIfBlank()(Login)
