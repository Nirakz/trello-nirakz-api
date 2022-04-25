import { MongoClient } from 'mongodb'
import { env } from '@/config/environtment'

let dbInstance = null

const client = new MongoClient(env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

export const connectDB = async () => {

  await client.connect()

  dbInstance =client.db(env.DATABASE_NAME)
}

export const getDB = () => {
  if (!dbInstance) throw new Error ('Must connect to Database first!')
  return dbInstance
}
