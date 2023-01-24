const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
dotenv.config()
mongoose.set('strictQuery', false);

const { Schema } = mongoose

const newSchema = new Schema({
    url: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    markName: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
})


const Product = mongoose.model("/product", newSchema)

// ! get products
app.get("/product", (req, res) => {
    Product.find({}, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    })
})

// ! get by id
app.get("/product/:id", (req, res) => {
    const { id } = req.params
    Product.findById(id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    })
})

//! post 
app.post("/product", (req, res) => {
    let newProduct = new Product({
        url: req.body.url,
        price: req.body.price,
        markName: req.body.markName,
        name: req.body.name
    })
    newProduct.save()
    res.send("Post is success")
})

//! delete
app.delete("/product/:id", (req, res) => {
    const { id } = req.params
    Product.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Delete is succesfully")
        }
    })
})

const PORT = process.env.PORT
const DB = process.env.URL.replace("<password>", process.env.password)

mongoose.connect(DB, () => {
    console.log("Db is Connect")
    app.listen(PORT, () => {
        console.log(`SERVER IS UP AND RUNNING ${PORT}`)
    })
})