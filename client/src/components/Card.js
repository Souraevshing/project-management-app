import React from 'react'

const Card = ({ project }) => {
  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h6 className='card-title '>{project.name}</h6>
            <a
              href={`/projects/${project.id}`}
              className='btn btn-outline-dark'
            >
              View
            </a>
          </div>
          <p className='small'>
            Status : <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
