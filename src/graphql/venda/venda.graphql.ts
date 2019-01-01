export default `

  type Venda {
    id: ID
    nome_produto: String
    status_pagamento: String
    quantidade: Int
    comprador: String
    preco_produto: Float
    vendedor: User
  }

  input VendaInput {
    nome_produto: String
    status_pagamento: String
    quantidade: Int
    comprador: String
    preco_produto: Float
  }

  type Query {
    getVendas(page: Int, limit: Int, orderBy: String, search: String): [Venda] @auth
    getVenda: Venda
  }

  type Mutation {
    createVenda(venda: VendaInput): Venda @auth
  }

`;