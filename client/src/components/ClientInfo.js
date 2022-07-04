import React from 'react'
import { FaEnvelopeSquare, FaPhoneSquare, FaIdBadge } from 'react-icons/fa'

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon ' /> {client.name}
        </li>
        <li className='list-group-item'>
          <FaEnvelopeSquare className='icon' /> {client.email}
        </li>
        <li className='list-group-item'>
          <FaPhoneSquare className='icon' /> {client.phone}
        </li>
      </ul>
    </>
  )
}

export default ClientInfo
