import React, { useState } from 'react'

const AddItemForm = props => {
	const initialFormState = { id: null, name: '', text: '' }
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<form class="form-horizontal"
			onSubmit={event => {
				event.preventDefault()
				if (!item.name || !item.text) return
				props.addItem(item)
				setItem(initialFormState)
			}}
		>
			<label>Item name: </label>
			<br></br>
			<input type="text" name="name" value={item.name} onChange={handleInputChange} />
			<p></p>
			<label>Description: </label>
			<br></br>
			<input type="text" name="text" value={item.text} onChange={handleInputChange} />
			<p></p>
			<button className="btn btn-success">Add new item</button>
		</form>
	)
}

export default AddItemForm
