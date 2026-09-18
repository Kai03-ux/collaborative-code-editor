import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import { YSocketIO } from 'y-socket.io/dist/server'

const app = express()
app.use(express.static("public"))
const httpServer = createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const ySocketIO = new YSocketIO(io)
ySocketIO.initialize()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
    success: true,
  })
})

const PORT = 3000

httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})