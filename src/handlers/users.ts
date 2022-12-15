import express, { Request, Response } from 'express'

import { User, UserStore } from '../models/user'
import jwt from 'jsonwebtoken'



const userRoutes = (app: express.Application) => {
    app.post('/users', create)
    app.get('/users', index)
    app.get('/users/:id', show)
}

const store = new UserStore()


const index = async (_req: Request, res:Response)=>{
    try{
        jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string)
    }catch(err){
        res.status(401)
        res.json(`check the token ${err}`)
        return
    }
    const users = await store.index()
    res.json(users)
}


const show = async (_req: Request, res: Response)=>{
    const user = await store.show(_req.params.id)
    try{
        jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string)
    }catch(err){
        res.status(401)
        res.json(`INVALID token ${err}`)
        return
    }
    console.log('getting user by id')
    res.json(user)
}




const create = async (_req: Request, res: Response) => {
    const user: User = {
        firstname: _req.body.firstname,
        lastname: _req.body.lastname,
        password: _req.body.password,
    }
    try {
        const newUser = await store.create(user)
        var token = jwt.sign({user:newUser}, process.env.TOKEN_SECRET as string);
        res.json(token)
    } catch(err) {
        console.log(err)
        res.status(400)
        res.json(/*err +*/ user)
    }
}




export default userRoutes