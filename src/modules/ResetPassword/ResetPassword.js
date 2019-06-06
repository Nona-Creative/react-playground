import React from 'react'
import { Auth } from 'aws-amplify'

const fields = {
  resetEmail: null,
}

async function handleSubmit(event) {
  event.preventDefault()

  try {
    await Auth.forgotPassword(fields.resetEmail)
    console.log('great success')
  } catch (e) {
    alert(e.message)
  }
}

function handleChange(event) {
  fields[ event.target.id ] = event.target.value
}

function ResetPassword() {
  return (
    <div className="ResetPassword">
      <h2>
        Reset Password
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          Email
          <input id='resetEmail' type="text" onChange={handleChange}/>
        </div>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  )
}

export default ResetPassword
