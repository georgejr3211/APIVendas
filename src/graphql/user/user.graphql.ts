export default `

  directive @auth on FIELD_DEFINITION

  type User {
    id: ID
    name: String
    password: String
    vendas: [Venda]
  }

  type Query {
    getUsers(page: Int, limit: Int, orderBy: String, search: String): [User] @auth
    getUser: User
  }

  type Mutation {
    createUser(user: UserInput): User
    updateUser(id: Int, user: UserInput): User
    deleteUser(id: Int): Boolean
  }

  input UserInput {
    nome: String,
    password: String
  }

`;