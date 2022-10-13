import React from 'react'

import { useFormik } from 'formik'

import style from './Phone.module.css'

type FormikErrorType = {
  code?: null | number
}

export const Phone = () => {
  const formik = useFormik({
    initialValues: {
      code: null,
    },
    validate: values => {
      const errors: FormikErrorType = {}

      return errors
    },
    onSubmit: values => {},
  })

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={formik.handleSubmit}></form>
    </div>
  )
}
