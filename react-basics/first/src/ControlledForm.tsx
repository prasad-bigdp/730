import React, { useState, ChangeEvent, FormEvent,useRef } from "react"

type FormData = {
	name: string
	age: number
}

const BasicForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({ name: "", age: 0 })
     const nameRef= useRef('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       
        console.log(nameRef)
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: name === "age" ? Number(value) : value,
		}))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log("Form data:", formData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name2'>Name2: </label>
				<input
					type='text'
					id='name2'
					name='name2'
                    ref={nameRef}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor='name'>Name: </label>
				<input
					type='text'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor='age'>Age: </label>
				<input
					type='number'
					id='age'
					name='age'
					value={formData.age}
					onChange={handleChange}
				/>
			</div>
			<button type='submit'>Submit</button>
		</form>
	)
}
export default BasicForm