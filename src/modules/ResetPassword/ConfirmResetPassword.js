import React from 'react'
import { Auth } from 'aws-amplify'

const fields = {
  confirmResetEmail: null,
  confirmResetCode: null,
  confirmResetPassword: null,
}

async function handleSubmit(event) {
  event.preventDefault()

  try {
    await Auth.forgotPasswordSubmit(
      fields.confirmResetEmail,
      fields.confirmResetCode,
      fields.confirmResetPassword,
    )

    console.log('success')
  } catch (e) {
    alert(e.message)
  }
}

function handleChange(event) {
  fields[ event.target.id ] = event.target.value
}

function ConfirmReset() {
  return (
    <div className="ConfirmReset">
      <h2>
        Confirm Reset
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          Email
          <input id='confirmResetEmail' type="text" onChange={handleChange}/>
        </div>
        <div>
          Code
          <input id='confirmResetCode' type="text" onChange={handleChange}/>
        </div>
        <div>
          New Password
          <input id='confirmResetPassword' type="text" onChange={handleChange}/>
        </div>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  )
}

export default ConfirmReset
