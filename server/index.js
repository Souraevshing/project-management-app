import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'

import { connectDB } from './config/connectDB.js'
import schema from './schema/schema.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

//MongoDB Connection
connectDB()

app.get('/',(req,res)=>{
  res.send('Api is running')
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: process.env.NODE_ENV }))

app.listen(PORT, console.log(`Server running at port ${PORT} `.bgYellow.green))
