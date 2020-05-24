import React from 'react'

const ItemTable = props => (
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Item name</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.text}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(item)
                }}
                className="btn btn-warning"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteItem(item.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ItemTable
