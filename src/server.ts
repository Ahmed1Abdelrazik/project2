import express, {Request, Response} from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import user_Routes from './handlers/users'
import Order_Routes from './handlers/orders'
import Product_Routes from './handlers/products'

const app:express.Application = express();
const adress:string = "0.0.0.0:3000"
const port:number = 3000;

const corsOptions = {
  origin: 'http://someotherdomain.com',
  optionSuccessStatud:200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', function (req:Request,res:Response) {
  const message = '<h2 style="color: blue; margin-top:137px; background-color:yellow; text-align: center ;"   > Welcome To The Main Api! </h2>'
  res.send(message);
})
app.get('/test-cors',cors(corsOptions), function(req,res,next){
  res.json({msg:'This is CORS-enabled with a middleware'})

})


user_Routes(app);
Order_Routes(app);
Product_Routes(app);



app.listen(3000, function(){
 console.log(`listening on port ${port}!`)
})

export default app