import express from "express";
import cors from 'cors';
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()
import productMan from './router/productMan.router.js'
import productWomen  from "./router/productWoman.router.js";
import productKid from './router/productKid.router.js'
import account from "./router/account.router.js";
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.gawtdax.mongodb.net/?retryWrites=true&w=majority`

const port = process.env['PORT'] || 8000
app.use(cors())
app.use(express.json())
app.use('/api/donam', productMan) 
app.use('/api/donu', productWomen)
app.use('/api/dotreem', productKid)
app.use('/api/account', account)
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    console.log('MongoDB connection established...')
    app.listen(port)
})
.catch(err => {
    console.log(err)
})
