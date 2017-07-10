import React, { Component } from 'react';
import { addPerson } from '../actions/index';
import { connect } from 'react-redux';

let NewUserForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addPerson(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add person
        </button>
      </form>
    </div>
  )
}
NewUserForm = connect()(NewUserForm);

export default NewUserForm;