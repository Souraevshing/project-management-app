import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <FaExclamationCircle className='text-danger' size='8em' />
      <h2>404</h2>
      <p className='lead'>Sorry! Page not found.</p>
      <Link to='/' className='btn btn-outline-dark '>
        Back
      </Link>
    </div>
  )
}

export default Error
