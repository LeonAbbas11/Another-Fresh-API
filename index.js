require("dotenv").config();
const express = require('express')
const app = express()
const mainRouter = require('./src/routes/index')
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000
const morgan = require('morgan')
const helmet  = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(fileupload({
//   useTempFiles: true,
//   tempFileDir : '/upload'
// }))
app.use(helmet())
app.use(xss())
app.use(cors())
app.use(morgan('dev'))


// Router
app.use(mainRouter)

app.all('*', (req, res) => {
  res.status(404).json({message :'Not found'});
})


app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`)
})