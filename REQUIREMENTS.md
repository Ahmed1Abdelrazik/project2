## API Endpoints

#### Products (OK)

- Index
- Show
- Create [token required]

#### Users (OK)

- Index [token required]
- Show [token required]
- Create N[token required] (// it creates a token)

#### Orders

- Current Order by user (args: user id)[token required]

## Data Shapes

#### Product

- id
- name
- price

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
