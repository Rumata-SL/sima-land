import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { AppActionType } from '../reducers/appReducer'
import { AppRootStateType } from '../reducers/rootReduser'

export type DispatchActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>

//Types for redux Thunk
export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>

//Types for actions
export type AppRootActionsType = AppActionType
