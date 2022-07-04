import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from '././pages/Homepage'
import Error from '././pages/Error'
import Project from './pages/Project'
import Header from '././components/Header'

//configuration for apollo client
//update cache by replacing existing with incoming data

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
