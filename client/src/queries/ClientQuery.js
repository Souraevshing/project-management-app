import { gql } from '@apollo/client'

//FETCH_ALL_CLIENTS
const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

export { GET_CLIENTS }
