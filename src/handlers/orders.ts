import express, { Request, Response } from 'express'
import { Order, OrderStore } from '../models/order'
import jwt from 'jsonwebtoken'



const OrderRoutes = (app: express.Application) => {

    app.get('/orders/:id', show)
    app.post('/orders/', create)

}

const store = new OrderStore()



const show = async (_req: Request, res: Response)=>{
    try{
        jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string)
    }catch(err){
        res.status(401)
        res.json(`INVALID token ${err}`)
        return
    }
    try{
        const Order = await store.show(_req.params.id)
        // console.log('getting Order by id')
        res.json(Order)
    }catch(err) {
    res.status(400)
    res.json(err)
    }
}
const create = async (_req: Request, res: Response) => {
    const Order: Order = {
        status: _req.body.status,
        user_id: _req.body.user_id
    }
    try{
        jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string)
    }catch(err){
        res.status(401)
        res.json(`INVALID token ${err}`)
        return
    }
    try {
        const newOrder = await store.create(Order)
        res.json(newOrder)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}
export default OrderRoutes