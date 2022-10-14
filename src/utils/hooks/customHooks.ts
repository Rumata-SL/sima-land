import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppRootStateType } from '../../bll/reducers/rootReduser'
import { DispatchActionType } from '../../bll/types/types'

export const useAppDispatch = () => useDispatch<DispatchActionType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
