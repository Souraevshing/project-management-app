import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_CLIENTS } from '../queries/ClientQuery'
import ClientRow from './ClientRow'
import Loading from './Loading'

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)
  if (loading) return <Loading />
  else if (error)
    return (
      <p style={{ color: '#fff', backgroundColor: 'red' }}>
        Sorry! Unable to fetch clients.
      </p>
    )

  return (
    <>
      {!loading && !error && (
        <table className='table table-dark table-striped table-bordered border-warning table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {data.clients.map((client) => {
              return <ClientRow key={client.id} client={client} />
            })}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Clients
