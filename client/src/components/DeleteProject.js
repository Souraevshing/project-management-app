import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { GET_PROJECTS } from '../queries/ProjectQuery'
import { DELETE_PROJECT } from '../mutations/ProjectMutation'

const DeleteProject = ({ projectId }) => {
  const navigate = useNavigate()

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  })

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-outline-danger m-2' onClick={deleteProject}>
        <FaTrash className='icon' />
      </button>
    </div>
  )
}

export default DeleteProject
