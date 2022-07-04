import React from 'react'
import { useMutation } from '@apollo/client'
import { FaTrashAlt } from 'react-icons/fa'

import { DELETE_CLIENT } from '../mutations/ClientMutation'
import { GET_CLIENTS } from '../queries/ClientQuery'
import { GET_PROJECTS } from '../queries/ProjectQuery'

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],

    //updating cache to filter out deleted clients and fetching all clients again.

    //update(cache, { data: { deleteClient } }) {
    //calling deleteClient and fetching all clients and reading from cache.

    //const { clients } = cache.readQuery({ query: GET_CLIENTS })

    //again reading from cache and replacing deleted clients.

    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   })
    // },
  })

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td className='table-light border border-white'>
        <button className='btn btn-danger' onClick={deleteClient}>
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  )
}

export default ClientRow
