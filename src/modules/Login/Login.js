import React from 'react'
import { Auth } from 'aws-amplify'

const fields = {
  username: null,
  password: null,
}

async function handleSubmit(event) {
  event.preventDefault()

  try {
    await Auth.signIn(fields.username, fields.password)
    console.log('great success')
  } catch (e) {
    console.log(e.message)
  }
}

function handleChange(event) {
  fields[ event.target.id ] = event.target.value
}

function Login() {
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username
          </label>
          <input id={'username'} type="text" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">
            Password
          </label>
          <input id={'password'} type="password" onChange={handleChange}/>
        </div>
        <input type="submit" value={'Submit'}/>
      </form>
    </div>
  )
}

export default Login
