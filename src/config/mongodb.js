import { MongoClient } from 'mongodb'
import { env } from '@/config/environtment'

const client = new MongoClient(env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

export const connectDB = async () => {

  try {
    await client.connect()

    await listDB()

    console.log('Connect successfully to sever!')

  } finally {
    await client.close()
  }
}

const listDB = async () => {
  const databasesList = await client.db().admin().listDatabases()
  console.log(databasesList)
}
