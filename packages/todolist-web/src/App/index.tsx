import React from 'react'
import styled from '@emotion/styled'
import { Provider } from 'react-redux'

import store from '~/store/store'

import VerticalColumns from './VerticalColumns'

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header>
          <TabButton>My Tasks</TabButton>
          {/*
          <TabButton>In Progress</TabButton>
          <TabButton>Completed</TabButton>
          */}
        </Header>
        <VerticalColumns />
      </Container>
    </Provider>
  )
}

const Container = styled.div`
  background-color: rgb(0, 121, 191);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 12px;
  padding-bottom: 0px;
  color: white;
  display: flex;
`

const TabButton = styled.div`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    text-decoration: underline;
  }
`
