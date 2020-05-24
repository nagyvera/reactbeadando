import React, { useState, Fragment } from 'react'
import AddItemForm from './forms/AddItemForm'
import EditItemForm from './forms/EditItemForm'
import ItemTable from './tables/ItemTable'

const App = () => {
	// Data
	const itemsData = [
		{ id: 1, name: 'Bevásárlás', text: 'alma, körte, kenyér' },
		{ id: 2, name: 'Porszívózás', text: '17:00-ig' },
		{ id: 3, name: 'Találkozó Annával', text: '18:30, SzIT' },
	]

	const initialFormState = { id: null, name: '', text: '' }

	// Setting state
	const [ items, setItems ] = useState(itemsData)
	const [ currentItem, setCurrentItem ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addItem = item => {
		item.id = item.length + 1
		setItems([ ...items, item ])
	}

	const deleteItem = id => {
		setEditing(false)
		setItems(items.filter(item => item.id !== id))
	}

	const updateItem = (id, updatedItem) => {
		setEditing(false)
		setItems(items.map(item => (item.id === id ? updatedItem : item)))
	}

	const editRow = item => {
		setEditing(true)
		setCurrentItem({ id: item.id, name: item.name, text: item.text })
	}

	return (
		<div className="align-content-md-center">
			<h1>Manager App</h1>
			<br></br>
			<div className="card-body">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit item</h2>
							<EditItemForm
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add item</h2>
							<AddItemForm addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div className="card-group">
					<h2>View items</h2>
					<ItemTable items={items} editRow={editRow} deleteItem={deleteItem} />
				</div>
			</div>
		</div>
	)
}

export default App
