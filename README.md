### THE STRUCTURE:

**the database schema**
in database `database` there are 4 tables

1. `users` table: have the following columns:
   column ---> type
   _id_ ---> SERIAL PRIMARY KEY (integer)
   _firstname_ ---> VARCHAR(64)
   _lastname_ ---> VARCHAR(64)
   _password_ ---> VARCHAR(64)

2. `orders` table: have the following columns:
   column ---> type
   _id_ ---> SERIAL PRIMARY KEY (integer)
   _status_ ---> VARCHAR(64)
   _user_id_ ---> bigint

3. `products` table: have the following columns:
   column ---> type
   _id_ ---> SERIAL PRIMARY KEY (integer)
   _name_ ---> VARCHAR(64)
   _price_ ---> integer

4. `order_products` table: have the following columns:
   column ---> type
   _id_ ---> SERIAL PRIMARY KEY (integer)
   _quantity_ ---> integer
   _order_id_ ---> bigint
   _product_id_ ---> bigint

   **we have the following folders:**

5. `migrations`: includes SQL Commands to create tables(users, orders, products, order_products ) which we need to insert into the API.

6. `src` :
   -->`server.ts`: our main .ts file which initializes the server and all routes
   -->`handlers`: includes RESTful endpoints for each model
   ---->`orders.ts`: used to handle orders model
   ---->`products.ts`: used to handle products model
   ---->`users.ts`: used to handle users model

   -->`models`: it has CRUD operations on our database tables
   ---->`orders.ts`: responsible for making CRUD operations on the orders table
   ---->`products.ts`: responsible for making CRUD operations on the products table
   ---->`users.ts`: responsible for making CRUD operations on users' table
   --> `tests`: includes simple jasmine test for each model

--> `tests`: includes simple jasmine test for each model

-->`orders.ts`: responsible for making CRUD operations on the orders table

-->`products.ts`: responsible for making CRUD operations on the products table

-->`users.ts`: responsible for making CRUD operations on users' table

### THE USAGE:

# to setup and connect to the database :

_the port of database is: 5432_

1. to the database (`new-database`):
   to open psql we write the following in terminal:
   $psql -U postgres -h localhost
   after writing the password, to create `new-database`:
   $CREATE DATABASE new-database;
   then all tables will be inserted using migrations

# to initialize the server:

run the following commands in terminal

1.  to insert tables we use in the api
    $db-migrate up

2.  to start the server with env=dev
    $yarn start
3.  to create new user using postman:
    1. POST http://localhost:3000/users/
    2. Send a json file like this
       {
       "firstname":"firstname test",
       "lastname":"lastname test",
       "password":"test123"
       }
       and _it should return a token_
4.  to create a product
    1. POST http://localhost:3000/products/
    2. Send a json file like this
       {
       "name": "product test",
       "price": "200",
       "token": "_valid token from any user_"
       }
5.  to see current Order by user with id = 1:

    1. GET http://localhost:3000/orders/1
    2. Send a json file like this
       {
       "token": "_valid token from any user_"
       }

6.  to see an user with his id :

    1. GET http://localhost:3000/users/1
    2. Send a json file like this
       {
       "token": "_valid token from any user_"
       }

7.  to see the product with id = 1:

    1. GET http://localhost:3000/products/1

8.  to build and run tests
    $yarn test

# notes:

### environmet variables:

POSTGRES_HOST = 127.0.0.1
POSTGRES_DB = new-database
POSTGRES_TEST_DB = new-database-test
POSTGRES_USER = magical_user
POSTGRES_PASSWORD = 235896
ENV=dev
BCRYPT_PASSWORD=the-secret-password
SALT_ROUNDS=10
TOKEN_SECRET = ahmed123!
