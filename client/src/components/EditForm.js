import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { UPDATE_PROJECT } from '../mutations/ProjectMutation'
import { GET_PROJECT } from '../queries/ProjectQuery'

const EditForm = ({ project }) => {
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [status, setStatus] = useState('new')

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !description || !status) {
      return alert('All fields are mandatory')
    }
    updateProject(name, description, status)
  }

  return (
    <div className='mt-5'>
      <h3>Edit Project</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Name </label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <textarea
            className='form-control'
            id='description'
            placeholder='Enter project description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Status</label>
          <select
            id='status'
            className='form-select'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value='new'>Not Started</option>
            <option value='progress'>In Progress</option>
            <option value='completed'>Completed </option>
          </select>
        </div>
        <button type='submit' className='btn btn-outline-info'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditForm
