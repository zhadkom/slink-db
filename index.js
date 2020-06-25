const express = requires('express')

const app = express()

const port = process.env.PORT || 8082

app.get('/', (req, res) => {
  res.send('This is slink db 🔏')
})

app.listen(port)
