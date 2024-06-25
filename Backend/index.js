const express = require('express');
const {products, homeProducts}  = require('./data');
const cors = require('cors')
const fs = require('file-system')
require('dotenv').config

const PORT = process.env.PORT || 6060;

const app = express();


app.use(express.json())
app.use(cors({
    origin : 'http://localhost:3000'
}))
// app.use('/api/user' , authRouter)

app.get('/api/products' , ( req , res ) => {

    res.json({product : products})
} )

app.get('/api/homeProducts' , (req , res) => {
    console.log('Sending Home Products');
    res.json({homeProducts : homeProducts})
})



// connectToDB();

app.listen(PORT , () => {
    console.log("Server running on PORT : " + PORT)
})

