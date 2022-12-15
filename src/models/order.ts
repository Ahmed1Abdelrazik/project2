import Client from '../database'
import bcrypt from 'bcrypt'


export type Order = {
  id?: string;
  status: string;
  user_id: string;
}

export class OrderStore {

  async show(id: string): Promise<Order> {
    try {
      const sql = 'SELECT * FROM Orders WHERE user_id=($1)'

      const conn = await Client.connect()

      const result = await conn.query(sql, [id])
      console.log(result.rows[0])
      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`cant show Order ${id}: ${err}`)
    }
  }

  
}
