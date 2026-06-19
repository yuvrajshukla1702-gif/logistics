// Pull in the tools we need
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware — lets React (on port 5173) talk to this server
app.use(cors())
// Lets the server read JSON from request bodies
app.use(express.json())

// A test route so you can verify the server is alive
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})