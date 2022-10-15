import { ThunkType } from '../types/types'

type InitialStateType = typeof initialState

const initialState = {
  login: '',
  email: '',
  country: '',
  city: '',
  isInitialized: false,
  isLoggedIn: false,
  isAddress: false,
  isVerified: false,
}

export const appReducer = (
  state: InitialStateType = initialState,
  action: AppActionType
): InitialStateType => {
  switch (action.type) {
    case 'app/SET-IS-INITIALIZED':
      return { ...state, isInitialized: action.value }
    case 'app/SET-LOGIN':
      return { ...state, login: action.login, email: action.email, isLoggedIn: action.isLoggedIn }
    case 'app/SET-ADDRESS':
      return { ...state, country: action.country, city: action.city, isAddress: action.isAddress }
    case 'app/SET-IS-VERIFIED':
      return { ...state, isInitialized: action.isInitialized, isVerified: action.isVerified }
    default:
      return state
  }
}

//AC
export const setAppInitialized = (value: boolean) => {
  return {
    type: 'app/SET-IS-INITIALIZED',
    value,
  } as const
}
export const setLogin = (login: string, email: string, isLoggedIn: boolean) => {
  return {
    type: 'app/SET-LOGIN',
    login,
    email,
    isLoggedIn,
  } as const
}

export const setAddress = (country: string, city: string, isAddress: boolean) => {
  return {
    type: 'app/SET-ADDRESS',
    country,
    city,
    isAddress,
  } as const
}
export const setIsVerified = (isInitialized: boolean, isVerified: boolean) => {
  return {
    type: 'app/SET-IS-VERIFIED',
    isInitialized,
    isVerified,
  } as const
}

// Thunks
export const loginTC =
  (login: string, email: string, isLoggedIn: boolean): ThunkType =>
  dispatch => {
    dispatch(setLogin(login, email, isLoggedIn))
  }
export const addressTC =
  (country: string, city: string, isAddress: boolean): ThunkType =>
  dispatch => {
    dispatch(setAddress(country, city, isAddress))
  }
export const verifiedTC =
  (isInitialized: boolean, isVerified: boolean): ThunkType =>
  dispatch => {
    dispatch(setIsVerified(isInitialized, isVerified))
  }

export const logOut = (): ThunkType => dispatch => {
  dispatch(setLogin('', '', false))
  dispatch(setAddress('', '', false))
  dispatch(setIsVerified(false, false))
}
// Action Types
export type AppActionType =
  | ReturnType<typeof setAppInitialized>
  | ReturnType<typeof setLogin>
  | ReturnType<typeof setAddress>
  | ReturnType<typeof setIsVerified>
