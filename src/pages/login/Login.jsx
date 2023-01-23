import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import './login.css'
export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isPending} = useLogin()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email" />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          type="password" />
      </label>


      {!isPending && <button className='btn'>Login</button>}
      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
