import React, { useState, useEffect } from 'react'

const EditItemForm = props => {
  const [ item, setItem ] = useState(props.currentItem)

  useEffect(
    () => {
      setItem(props.currentItem)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setItem({ ...item, [name]: value })
  }

  return (
    <form class= "form-horizontal"
      onSubmit={event => {
        event.preventDefault()
        props.updateItem(item.id, item)
      }}
    >
      <label>Name</label>
      <br></br>
      <input type="text" name="name" value={item.name} onChange={handleInputChange} />
      <br></br>
      <label>Description</label>
      <br></br>
      <input type="text" name="text" value={item.text} onChange={handleInputChange} />
      <p></p>
      <button onClick={() => props.setEditing(true)} className= "btn btn-warning" >Update user</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-dark">
        Cancel
      </button>
    </form>
  )
}

export default EditItemForm
