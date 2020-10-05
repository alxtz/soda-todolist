import axios from 'axios'
import { Dispatch } from '~/store/types'
import { ActionTypes, TODOLIST_ACTIONS } from './types'

const HOST = 'http://localhost:3001'

export const fetchTodos = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: TODOLIST_ACTIONS.SET_LOADING,
    loading: true,
  })

  setTimeout(async () => {
    const resp = await axios.get(HOST + '/items')

    dispatch({
      type: TODOLIST_ACTIONS.SET_TODOS,
      todos: resp.data,
    })

    dispatch({
      type: TODOLIST_ACTIONS.SET_LOADING,
      loading: false,
    })
  }, 500)
}

export const addTodo = (content: string, isComplete: boolean, isFavorite: boolean) => async (
  dispatch: Dispatch<ActionTypes>
) => {
  dispatch({
    type: TODOLIST_ACTIONS.SET_LOADING,
    loading: true,
  })

  setTimeout(async () => {
    const resp = await axios.post(HOST + '/create_item', {
      content,
      is_favorite: isFavorite,
      is_complete: isComplete,
    })

    dispatch({
      type: TODOLIST_ACTIONS.SET_TODOS,
      todos: resp.data,
    })

    dispatch(fetchTodos())
  }, 500)
}

export const delTodo = (id: number) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: TODOLIST_ACTIONS.SET_LOADING,
    loading: true,
  })

  setTimeout(async () => {
    const resp = await axios.delete(HOST + '/item/' + id)

    dispatch(fetchTodos())
  }, 500)
}

export const addComment = (id: number, content: string) => async (
  dispatch: Dispatch<ActionTypes>
) => {
  dispatch({
    type: TODOLIST_ACTIONS.SET_LOADING,
    loading: true,
  })

  setTimeout(async () => {
    const resp = await axios.post(HOST + '/create_comment', {
      todo_id: id,
      comment_content: content,
    })

    dispatch(fetchTodos())
  }, 500)
}

export const setIsFavorite = (id: number, is_favorite: boolean) => async (
  dispatch: Dispatch<ActionTypes>
) => {
  dispatch({
    type: TODOLIST_ACTIONS.SET_LOADING,
    loading: true,
  })

  setTimeout(async () => {
    const resp = await axios.post(HOST + '/set_favorite_status', {
      id,
      is_favorite,
    })

    dispatch(fetchTodos())
  }, 500)
}

export const setIsComplete = (id: number, is_complete: boolean) => async (
  dispatch: Dispatch<ActionTypes>
) => {
  dispatch({
    type: TODOLIST_ACTIONS.SET_LOADING,
    loading: true,
  })

  setTimeout(async () => {
    const resp = await axios.post(HOST + '/set_complete_status', {
      id,
      is_complete,
    })

    dispatch(fetchTodos())
  }, 500)
}
