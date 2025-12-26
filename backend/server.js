import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import fetch from 'node-fetch'

dotenv.config()

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000
const api = process.env.API_KEY
const url = process.env.URL

app.get('/', async (req, res) => {
  const category = req.query.category || 'general'

  try {
    const fullUrl = `${url}${category}&apiKey=${api}`

    const response = await fetch(fullUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    })

    const data = await response.json()
    res.json(data)

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
