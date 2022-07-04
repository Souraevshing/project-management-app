import React from 'react'
import { useQuery } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'

import { GET_PROJECT } from '../queries/ProjectQuery'
import Loading from '../components/Loading'
import ClientInfo from '../components/ClientInfo'
import DeleteProject from '../components/DeleteProject'
import EditForm from '../components/EditForm'

const Project = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } })

  if (loading) return <Loading />
  if (error)
    return (
      <p style={{ color: '#fff', backgroundColor: 'red' }}>
        Sorry! Project not found.
      </p>
    )

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link
            to='/'
            className='btn btn-outline-secondary btn-sm w-25 d-inline ms-auto'
          >
            Back
          </Link>
          <h2>{data.project.name}</h2>
          <p>{data.project.description}</p>
          <h6 className='mt-3'>Status</h6>
          <p className='lead'>{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditForm project={data.project} />
          <DeleteProject projectId={data.project.id} />
        </div>
      )}
    </>
  )
}

export default Project
