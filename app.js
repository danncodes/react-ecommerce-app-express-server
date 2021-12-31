var express = require('express')
var app = express()
const cors = require("cors")
app.use(cors())
const PORT = 8000

const db = require("./db.json")

app.listen( process.env.PORT || PORT, ()=> {
    console.log(`Server Running on ${PORT}`)
})

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.get('/products', (req,res) => {
    res.send(db.products)
})

app.get('/categories', (req,res) => {
    res.send(db.categories)
})