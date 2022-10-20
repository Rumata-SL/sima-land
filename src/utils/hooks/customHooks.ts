import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { RootStateType } from '../../reducers/rootReduser'
import { DispatchActionType } from '../../types/types'

export const useAppDispatch = () => useDispatch<DispatchActionType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
