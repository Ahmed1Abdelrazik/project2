import Client from '../database'
import bcrypt from 'bcrypt'

const saltRounds = process.env.SALT_ROUNDS
const pepper = process.env.BCRYPT_PASSWORD

export type User = {
  id?: string;
  firstname: string;
  lastname: string;
  password: string;
}

export class UserStore {
  async index(): Promise<User[]> {
    try {

      const conn = await Client.connect()
      const sql = 'SELECT * FROM users'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get users: ${err}`)
    } 
  }

  async show(id: string): Promise<User> {
    try {
      const sql = 'SELECT firstname,lastname FROM users WHERE id=($1)'

      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`unable show user ${id}: ${err}`)
    }
  }

  async create(u: User): Promise<User> {
    try {

      const conn = await Client.connect()
      const sql = 'INSERT INTO users ( firstname,lastname, password) VALUES( $1, $2, $3) RETURNING *'

      const hash = bcrypt.hashSync(
        u.password + pepper, 
        Number(saltRounds)
      );

      const result = await conn.query(sql, [u.firstname,u.lastname, hash])
      const user = result.rows[0]

      conn.release()

      return user
    } catch(err) {
      throw new Error(`unable create user (${u.firstname}): ${err}`)
    } 
  }




}
