import React from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Confirm from '../Confirm/Confirm'
import ResetPassword from '../ResetPassword/ResetPassword'
import ConfirmResetPassword from '../ResetPassword/ConfirmResetPassword'
import './App.scss'

const App = () => (
  <div className="App">
    <header className="App__heading">
      REACT Playground
    </header>
    <main className="App__main">
      <Login/>
      <Signup/>
      <Confirm/>
      <ResetPassword/>
      <ConfirmResetPassword/>
    </main>
  </div>
)

export default App

