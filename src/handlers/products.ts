import express, { Request, Response } from 'express'
import { Product, ProductStore } from '../models/product'
import jwt from 'jsonwebtoken'



const ProductRoutes = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products', create)

}

const store = new ProductStore()


const index = async (_req: Request, res:Response)=>{
    const Products = await store.index()
    res.json(Products)
}
const show = async (_req: Request, res: Response)=>{
    const Product = await store.show(_req.params.id)
    console.log('getting product by id')
    res.json(Product)
}



const create = async (_req: Request, res: Response) => {
    const Product: Product = {
        name: _req.body.name,
        price: _req.body.price,
    }
    try{
        jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string)
    }catch(err){
        res.status(401)
        res.json(`INVALID token ${err}`)
        return
    }
    try {
        const newProduct = await store.create(Product)
        res.json(newProduct)
    } catch(err) {
        console.log(err)
        res.status(400)
        res.json(/*err +*/ Product)
    }
}




export default ProductRoutes