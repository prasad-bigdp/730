import React from 'react'
import { useRef } from 'react';

const UncontrolledForm = () =>
{
    const nameRef = useRef('');
    const emailRef = useRef('');
    const PasswordRef = useRef('')
  return (
      <div>
          <h1>Form 2</h1>
          <form action="" onSubmit={(e) => { e.preventDefault(); console.log(nameRef.current.value) }}>
              <input type="text" placeholder='Enter the name' ref={nameRef} /> 
              <button>submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm
