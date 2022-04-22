import express from 'express'
import { mapOrder } from '@/utilities/sorts.js'

const  app = express()

const  hostname = 'localhost'
const  port = 3020

app.get('/', (req, res) => {
    res.end('<h1>Hello word</h1><hr/>')
})

app.listen(port, hostname, () => {
  console.log(`Running at ${hostname}:${port}/`)
})