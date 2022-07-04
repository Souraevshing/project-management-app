import React from 'react'
import { useQuery } from '@apollo/client'

import Loading from './Loading'
import Card from './Card'
import { GET_PROJECTS } from '../queries/ProjectQuery'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)
  if (loading) return <Loading />
  if (error)
    return (
      <p style={{ color: '#fff', backgroundColor: 'red' }}>
        Unable to fetch projects.
      </p>
    )

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='row mt-5'>
          {data.projects.map((project) => {
            return <Card key={project.id} project={project} />
          })}
        </div>
      ) : (
        <p style={{ color: '#fff', backgroundColor: 'red' }}>
          Sorry! No Projects found
        </p>
      )}
    </>
  )
}

export default Projects
