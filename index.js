const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
// app.use(cors())

mongoose.connect(process.env.MONGO_SERVER,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))
