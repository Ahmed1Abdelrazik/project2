import Client from '../database'


export type Product = {
    id?:string;
    name:string;
    price:string;
}

export class ProductStore{
    async index(): Promise<Product[]> {

        try{
            const conn = await Client.connect()
            const sql = 'SELECT * FROM products'
            const result = await conn.query(sql)
            conn.release()
            return result.rows

        }catch(err){
            throw new Error('unable to get products: ${err}')
        }

    }
    async show(id: string): Promise<Product> {
      try {
        const sql = 'SELECT * FROM products WHERE id=($1)'
  
        const conn = await Client.connect()
  
        const result = await conn.query(sql, [id])
        
        conn.release()
        return result.rows[0]
      } catch (err) {
        throw new Error(`unable show Product ${id}: ${err}`)
      }
    }
    async create(u: Product): Promise<Product> {
        try {
    
          const conn = await Client.connect()
          const sql = 'INSERT INTO products ( name , price) VALUES($1, $2) RETURNING *'
    
          const result = await conn.query(sql, [u.name, u.price])
          const Product = result.rows[0]
    
          conn.release()
    
          return Product
        } catch(err) {
          throw new Error(`unable create Product (${u.id}): ${err}`)
        } 
      }
}