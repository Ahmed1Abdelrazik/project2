import express, { Request, Response } from 'express'
import { Order, OrderStore } from '../models/order'
import jwt from 'jsonwebtoken'



const OrderRoutes = (app: express.Application) => {

    app.get('/orders/:id', show)

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
    const Order = await store.show(_req.params.id)
    // console.log('getting Order by id')
    res.json(Order)
}


export default OrderRoutes