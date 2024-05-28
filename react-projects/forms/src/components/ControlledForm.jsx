import React, { useState } from 'react'

const ControlledForm = () =>
{
    const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
		<div>
			<input
				type='text'
				name='username'
				value={uname}
				onChange={(e) => setUname(e.target.value)}
				placeholder='Enter the name'
			/>{" "}
			<br />
			<br />
			<br />
			<input
				type='email'
				name='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Enter the Email'
			/>{" "}
			<br />
			<br />
			<br />
			<input
				type='password'
				name='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Enter the Password'
			/>
		</div>
	)
}

export default ControlledForm
