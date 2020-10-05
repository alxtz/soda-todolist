export type CommentType = {
  id: number
  content: string
  todoId: number
}

export type TodoType = {
  id: number
  content: string
  is_complete: boolean
  is_favorite: boolean
  comments: CommentType[]
}

export enum TODOLIST_ACTIONS {
  SET_TODOS = 'SET_TODOS',
  SET_LOADING = 'SET_LOADING',
}

type SetTodos = {
  type: typeof TODOLIST_ACTIONS.SET_TODOS
  todos: TodoType[]
}

type SetLoading = {
  type: typeof TODOLIST_ACTIONS.SET_LOADING
  loading: boolean
}

export type ActionTypes = SetTodos | SetLoading
