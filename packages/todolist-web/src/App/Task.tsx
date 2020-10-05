import React, { useState } from 'react'
import styled from '@emotion/styled'
import deleteSvg from './delete.svg'
import { CommentType } from '~/store/todoList/types'
import { useDispatch } from 'react-redux'
import { addComment, setIsFavorite, setIsComplete } from '~/store/todoList/actions'

type Props = {
  children: string
  isFavorite: boolean
  isComplete: boolean
  onDelete: () => void
  comments: CommentType[]
  todoId: number
}

export default function({ children, isFavorite, isComplete, onDelete, comments, todoId }: Props) {
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState('')

  return (
    <MainContainer>
      <Container>
        <ContentSection>
          <FlexContainer>
            <IsFavorite
              isFavorite={isFavorite}
              onClick={() => {
                dispatch(setIsFavorite(todoId, !isFavorite))
              }}
            >
              ★
            </IsFavorite>
            <IsComplete
              type="checkbox"
              checked={isComplete}
              onClick={() => {
                dispatch(setIsComplete(todoId, !isComplete))
              }}
            />
            {children}
          </FlexContainer>
          <img src={deleteSvg} onClick={onDelete} />
        </ContentSection>
      </Container>
      <CommentSection>
        <CommentTitle>comments:</CommentTitle>
        {comments.map(comment => (
          <Comment key={comment.id}>{comment.content}</Comment>
        ))}
        <AddContainer>
          <CommentInput
            placeholder="Type comment here..."
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <AddButton
            disabled={inputText === ''}
            onClick={() => {
              dispatch(addComment(todoId, inputText))
              setInputText('')
            }}
          >
            Add
          </AddButton>
        </AddContainer>
      </CommentSection>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: pointer;
  color: #172b4d;
  font-size: 14px;
  font-weight: 400;
  padding: 6px 8px;
  line-height: 24px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

const IsComplete = styled.input`
  cursor: pointer;
  transform: scale(1.5);
  margin: 0;
  margin-right: 15px;
  margin-left: 10px;
`

const IsFavorite = styled.div<{ isFavorite: boolean }>`
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  color: grey;

  ${props =>
    props.isFavorite &&
    `
      color: #e9ba26;
    `}
`

const CommentSection = styled.div``

const CommentTitle = styled.div`
  margin-top: 20px;
`

const Comment = styled.div`
  font-size: 12px;
  text-decoration: underline;
  padding-left: 10px;
`

const CommentInput = styled.input`
  background-color: #fafbfc;
  border: none;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  color: #172b4d;
  border-radius: 3px;
  line-height: 16px;
  padding: 4px 6px;

  &:focus {
    outline: none;
  }
`

const AddButton = styled.button`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  padding: 4px 6px;
  text-align: center;
  border-radius: 3px;
  transition: 0.3s all ease;
  margin-left: 5px;

  &:disabled {
    opacity: 0.5;
  }
`

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`
