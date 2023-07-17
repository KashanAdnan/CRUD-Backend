import express from "express";
import bodyParser from "body-parser";
import { Product } from './models/poductModel.mjs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { connectDatabase } from "./DB/Connection.DB.mjs"
const app = express();
const PORT = process.env.PORT || 3001
dotenv.config()

app.use(bodyParser.json());
connectDatabase(process.env.DB)


app.post("/product", async (req, res) => {
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    res.status(200).send({
        succes: true,
        product
    })
})

app.get("/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(404).send({
            message: `Product Not Found With ID : ${req.params.id}`
        })
    }
    res.status(200).send({
        succes: true,
        product
    })
})

app.get("/products", async (req, res) => {
    const products = await Product.find()
    res.status(200).send({
        succes: true,
        products
    })
})

app.put("/product/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate({ _id: req.params.id }, {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    })
    if (!product) {
        res.status(404).send({
            message: `Product Not Found With ID : ${req.params.id}`
        })
    }
    res.status(200).send({
        succes: true,
        product
    })
})

app.delete("/product/:id", async (req, res) => {
    const product = await Product.findByIdAndDelete({ _id: req.params.id })
    if (!product) {
        res.status(404).send({
            message: `Product Not Found With ID = ${req.params.id}`
        })
    }
    res.status(200).send({
        succes: true,
        product
    })
})

app.listen(PORT, () => {
    console.log(`Server is Running on PORT => ${PORT}`);
})