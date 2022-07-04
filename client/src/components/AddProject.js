import React, { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { useMutation, useQuery } from '@apollo/client'

import { ADD_PROJECT } from '../mutations/ProjectMutation'
import { GET_PROJECTS } from '../queries/ProjectQuery'
import { GET_CLIENTS } from '../queries/ClientQuery'

const AddProject = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [clientId, setClientId] = useState('')
  const [status, setStatus] = useState('new')

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS })
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      })
    },
  })

  const { loading, data, error } = useQuery(GET_CLIENTS)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description === '' || status === '' || name === '') {
      return alert('All fields are mandatory')
    }
    addProject(name, description, clientId, status)

    setName('')
    setDescription('')
    setStatus('new')
    setClientId('')
  }

  if (error)
    return (
      <p style={{ backgroundColor: 'red', color: '#fff' }}>
        Sorry! Unable to fetch projects.
      </p>
    )
  if (loading) {
    return null
  }

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type='button'
            class='btn btn-outline-warning'
            data-bs-toggle='modal'
            data-bs-target='#addProjectModal'
          >
            <div className='d-flex align-items-center'>
              <FaList className='icon' />
              <div>Add Project </div>
            </div>
          </button>

          <div
            class='modal fade'
            id='addProjectModal'
            aria-labelledby='addProjectModalLabel'
            aria-hidden='true'
          >
            <div class='modal-dialog'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='addProjectModalLabel'>
                    Add Project
                  </h5>
                  <button
                    type='button'
                    class='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div class='modal-body'>
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
                    <div className='mb-3'>
                      <label className='form-label'>Client</label>
                      <select
                        id='clientId'
                        className='form-select'
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value=''>Choose Client</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type='submit'
                      data-bs-dismiss='modal'
                      className='btn btn-outline-warning'
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AddProject
