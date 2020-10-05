import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { todoList } from './todoList/reducer'

export const rootReducer = combineReducers({
  todoList,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
