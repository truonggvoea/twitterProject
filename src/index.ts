import express from 'express'
import userRoute from './routes/users.routes'
import databaseService from './services/database.services'
const app = express()
app.use(express.json())
const PORT = 3000
databaseService.connect()
//route localhost: 3000/
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/users', userRoute)
//localhost:3000/users/tweets

app.listen(PORT, () => {
  console.log(`Server đang chạy tren port ${PORT}`)
})
