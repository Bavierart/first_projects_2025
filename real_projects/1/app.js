const express = require("express")
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

//route imports
const tasks = require('./routes/tasks')

//middware
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

//server activation
const port = 3000

//connecting to db and starting server
const start = async () => {

    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    }
    catch(error) {
        console.log(error)
    }
}

start()