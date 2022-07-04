import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'

import { ADD_CLIENT } from '../mutations/ClientMutation'
import { GET_CLIENTS } from '../queries/ClientQuery'

const AddClient = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS })

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' || phone === '' || name === '') {
      return alert('All fields are mandatory')
    }
    addClient(name, email, phone)

    setEmail('')
    setName('')
    setPhone('')
  }

  return (
    <>
      <button
        type='button'
        class='btn btn-outline-primary'
        data-bs-toggle='modal'
        data-bs-target='#addClientModal'
      >
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <div>Add Client</div>
        </div>
      </button>

      <div
        class='modal fade'
        id='addClientModal'
        aria-labelledby='addClientModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='addClientModalLabel'>
                Add Client
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
                  <label className='form-label'>Email </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Phone </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Enter your phone no '
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-outline-primary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient
