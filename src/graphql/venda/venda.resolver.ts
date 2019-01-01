import { User } from './../../models/user.model';
import { Venda } from './../../models/venda.model';
export default {

  Mutation: {

    createVenda: async (_, { venda }: { venda: Venda }, { token }) => {

      const novaVenda = await Venda.create({
        status_pagamento: venda.status_pagamento,
        comprador: venda.comprador,
        nome_produto: venda.nome_produto,
        preco_produto: venda.preco_produto,
        quantidade: venda.quantidade,
        user: token
      })
        .save();

      return { ...novaVenda, vendedor: { id: 1, name: "George", password: "12345" } };

    }

  }

}