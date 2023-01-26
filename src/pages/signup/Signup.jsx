import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import './signup.css'



export function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplyName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const { signup, isPending, error } = useSignup()


  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
    console.log(signup);
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]

    if (!selected) {
      setThumbnailError('Please select a file.')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (selected.size > 1000000) {
      setThumbnailError('Image file size is too large, it must be less than 100kb')
      return
    }
    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbnaihello worldl updated wifi testing');
  }



  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
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
      <label>
        <span>display name:</span>
        <input
          required
          onChange={(e) => setDisplyName(e.target.value)}
          type="text" />
      </label>
      <label>
        <span>profile picture:</span>
        <input
          required
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      {!isPending && <button className='btn'>Sign up</button>}
      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
//

const vowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0


  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount += 1
    }

  }
  return vowelCount
}

console.log(vowels('striaanag'))


 