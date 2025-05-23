import React from 'react';
import './App.css'
import UserInfo from './UserInfo';
import { Provider } from 'react-redux'
import store from '../store.js'

function App() {
  return (
    <>
      <Provider store={store}>
        <UserInfo />
      </Provider>
    </>
  )
}

export default App
