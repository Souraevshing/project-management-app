import React from 'react'

import AddClient from '../components/AddClient'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import AddProject from '../components/AddProject'

const Homepage = () => {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClient />
        <AddProject />
      </div>

      <Projects />
      <hr className='text-danger border-2 opacity-30' />
      <Clients />
    </>
  )
}

export default Homepage
