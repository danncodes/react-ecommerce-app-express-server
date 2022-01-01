const express = require('express')
const app = express()
const cors = require("cors")
const { products } = require("./data")
const PORT = 8000

app.use(cors())

app.listen( process.env.PORT || PORT, ()=> {
    console.log(`Server Running on ${PORT}`)
})


app.get('/products', (req,res) => {
    res.send(JSON.stringify(products))
})

app.get('/products/:id', (req,res) => {
    const id = req.params.id

    const product = products.filter( (product) => {
        return product.id == id
    })

    res.send(JSON.stringify(product[0]))

})