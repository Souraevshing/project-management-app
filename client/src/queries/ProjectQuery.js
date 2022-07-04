import { gql } from '@apollo/client'

//FETCH_ALL_PROJECTS
const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`

//FETCH_SINGLE_PROJECT
const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`

export { GET_PROJECTS, GET_PROJECT }
