import React from 'react'
import { Auth } from 'aws-amplify'

const fields = {
  confirmationCode: null,
  confirmationUsername: null,
}

async function handleSubmit(event) {
  event.preventDefault()

  try {
    await Auth.confirmSignUp(fields.confirmationUsername, fields.confirmationCode)
    console.log('great success')
  } catch (e) {
    console.log(e.message)
  }
}

function handleChange(event) {
  fields[ event.target.id ] = event.target.value
}

function Confirm() {
  return (
    <div className="Confirm">
      <h2>
        Confirm
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          Confirmation Code
          <input id='confirmationCode' type="text" onChange={handleChange}/>
        </div>
        <div>
          Username
          <input id='confirmationUsername' type="text" onChange={handleChange}/>
        </div>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  )
}

export default Confirm
