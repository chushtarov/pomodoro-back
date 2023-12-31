require("dotenv").config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())

app.use(require('./routes/todos.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/user.route'))
app.use(require('./routes/category.route'))

mongoose.connect(process.env.MONGO_SERVER,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("start"))
.catch((error) => console.log(error))

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))
