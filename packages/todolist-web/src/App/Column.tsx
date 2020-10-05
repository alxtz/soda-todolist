import React from 'react'
import styled from '@emotion/styled'
import Task from './Task'
import { TodoType } from '~/store/todoList/types'
import { useDispatch, useSelector } from 'react-redux'
import loadingSvg from './loading.svg'
import { RootState } from '~/store/types'
import { delTodo } from '~/store/todoList/actions'

export default function() {
  const dispatch = useDispatch()
  const { todos, loading } = useSelector((state: RootState) => state.todoList)

  return (
    <Container>
      <Card>
        {loading && (
          <LoadingContainer>
            <img src={loadingSvg} alt="" />
          </LoadingContainer>
        )}
        {!loading &&
          todos.map(todo => (
            <Task
              key={todo.id}
              todoId={todo.id}
              isFavorite={todo.is_favorite}
              isComplete={todo.is_complete}
              onDelete={() => dispatch(delTodo(todo.id))}
              comments={todo.comments}
            >
              {todo.content}
            </Task>
          ))}
      </Card>
    </Container>
  )
}

const Container = styled.div``

const Card = styled.div`
  min-width: 472px;
  background-color: #ebecf0;
  border-radius: 3px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
`

const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  color: #172b4d;
  font-size: 14px;
  font-weight: 700;
  padding-left: 6px;
`

const AddInput = styled.input`
  background-color: #fafbfc;
  border: none;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  color: #172b4d;
  border-radius: 3px;
  line-height: 20px;
  padding: 8px 12px;

  &:focus {
    outline: none;
  }
`

const ConfirmButton = styled.button`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 12px;
  text-align: center;
  border-radius: 3px;
  transition: 0.3s all ease;

  &:disabled {
    opacity: 0.5;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`
