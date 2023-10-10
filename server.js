const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

require("dotenv").config({path: "./.env"})

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

const routes = require("./api")
app.use("/", routes)

// parse-application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// parse application/json
app.use(bodyParser.json())

// Tell the user which port app is running on when successfully up and running.
app.listen(PORT, console.log(`Server is starting at ${PORT}`))