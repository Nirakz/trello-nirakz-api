import express from 'express'
import cors from 'cors'
import { corsOptions } from '@/config/cors'
import { connectDB } from '@/config/mongodb'
import { env } from '@/config/environtment'
import { apiV1 } from '@/routes/v1'

connectDB()
  .then(() => console.log('Connected successfully to database!'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()

  app.use(cors(corsOptions))

  app.use(express.json())

  app.use('/v1', apiV1)


  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })
}
