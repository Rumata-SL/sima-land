import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { AppActionType } from '../reducers/appReducer'
import { RootStateType } from '../reducers/rootReduser'

export type DispatchActionType = ThunkDispatch<RootStateType, unknown, AppRootActionsType>

//Types for redux Thunk
export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  AppRootActionsType
>

//Types for actions
export type AppRootActionsType = AppActionType
