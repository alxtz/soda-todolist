import { Reducer } from 'redux'
import { ActionTypes, TODOLIST_ACTIONS, TodoType } from './types'

type State = {
  todos: TodoType[]
  loading: boolean
}

const initialState: State = {
  todos: [],
  loading: false,
}

export const todoList: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TODOLIST_ACTIONS.SET_TODOS: {
      return {
        ...state,
        todos: action.todos,
      }
    }

    case TODOLIST_ACTIONS.SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      }
    }

    default:
      return state
  }
}
