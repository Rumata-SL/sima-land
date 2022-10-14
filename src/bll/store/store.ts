import { applyMiddleware, legacy_createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { AppRootStateType, rootReducer } from '../reducers/rootReduser'

// Сохраняет state в LocalStorage
function saveToLocalStorage(state: AppRootStateType) {
  try {
    const serialisedState = JSON.stringify(state)

    localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}
// Загружает state из LocalStorage
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState')

    if (serialisedState === null) return undefined

    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)

    return undefined
  }
}

const store = legacy_createStore(
  rootReducer,
  loadFromLocalStorage(),
  applyMiddleware(thunkMiddleware)
)

// Записываем state в localStorage при инициализации приложения
localStorage.setItem('persistantState', JSON.stringify(store.getState()))

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
