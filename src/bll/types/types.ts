import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { AppActionType } from '../reducers/appReducer'
import { AppRootStateType } from '../reducers/rootReduser'

// Types for useDispatch, useSelector
export type DispatchActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>
export const useAppDispatch = () => useDispatch<DispatchActionType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//Types for redux Thunk
export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>

//Types for actions
export type AppRootActionsType = AppActionType
