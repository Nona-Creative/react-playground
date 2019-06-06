import React from 'react'
import { Auth } from 'aws-amplify'

const fields = {
  email: null,
  signupPassword: null,
}

async function handleSubmit(event) {
  event.preventDefault()

  try {
    await Auth.signUp({
      username: fields.email,
      password: fields.signupPassword,
    })

    console.log('success')
  } catch (e) {
    alert(e.message)
  }
}

function handleChange(event) {
  fields[ event.target.id ] = event.target.value
}

function Signup() {
  return (
    <div className="Signup">
      <h2>
        Signup
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          Email
          <input id='email' type="text" onChange={handleChange}/>
        </div>
        <div>
          Password
          <input id='signupPassword' type="password" onChange={handleChange}/>
        </div>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  )
}

export default Signup
