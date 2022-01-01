const express = require('express')
const app = express()
const cors = require("cors")
const { products } = require("./data")
const dotenv = require('dotenv')
dotenv.config()
const PORT = 8000

const stripe = require('stripe')('sk_test_51K7TSRJefzD4PcLRuLMAb6kiMlJ36yxlPjs9JvRKCGH4suXCiSSqAonwORcZGI7FIWSLeXcRxFyieJVkwfJhPUx200XOirlLq8');


app.use(cors())

app.listen( process.env.PORT || PORT, ()=> {
    console.log(`Server Running on ${PORT}`)
})

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1KDCZOJefzD4PcLRAUE5wjE0',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://sleepy-brahmagupta-3e1ba9.netlify.app`,
      cancel_url: `https://sleepy-brahmagupta-3e1ba9.netlify.app/`,
    });
  
    res.redirect(303, session.url);
  });

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