import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '~/store/types'
import Column from './Column'
import { fetchTodos, addTodo } from '~/store/todoList/actions'

export default function() {
  const dispatch = useDispatch()
  const [isFav, setIsFav] = useState(false)
  const [isCmpl, setCmpl] = useState(false)
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <Container>
      <Boards>
        <EditContainer>
          <AddTodoSection>
            <IsFavorite isFavorite={isFav} onClick={() => setIsFav(!isFav)}>
              ★
            </IsFavorite>
            <IsComplete type="checkbox" checked={isCmpl} onClick={() => setCmpl(!isCmpl)} />
            <ContentInput
              placeholder="Type something here..."
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            />
            <AddButton
              disabled={inputText === ''}
              onClick={() => {
                dispatch(addTodo(inputText, isCmpl, isFav))
                setIsFav(false)
                setCmpl(false)
                setInputText('')
              }}
            >
              Add
            </AddButton>
          </AddTodoSection>
        </EditContainer>
        <Column />
      </Boards>
    </Container>
  )
}

const Container = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 8px 0px;
`

const Boards = styled.div`
  display: flex;
  flex-direction: column;
`

const EditContainer = styled.div`
  min-width: 472px;
  background-color: #ebecf0;
  border-radius: 3px;
  margin-bottom: 8px;
`

const AddTodoSection = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
`

const ContentInput = styled.input`
  background-color: #fafbfc;
  border: none;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  color: #172b4d;
  border-radius: 3px;
  line-height: 20px;
  padding: 8px 12px;
  width: 300px;

  &:focus {
    outline: none;
  }
`

const IsComplete = styled.input`
  cursor: pointer;
  transform: scale(2);
  margin: 0;
  margin-right: 15px;
  margin-left: 10px;
`

const IsFavorite = styled.div<{ isFavorite: boolean }>`
  cursor: pointer;
  color: grey;
  font-size: 30px;
  margin-left: 10px;
  margin-top: -5px;

  ${props =>
    props.isFavorite &&
    `
      color: #e9ba26;
    `}
`

const CommentSection = styled.div``

const AddButton = styled.button`
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
  margin-left: 10px;

  &:disabled {
    opacity: 0.5;
  }
`
