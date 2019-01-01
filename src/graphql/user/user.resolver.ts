import { User } from "../../models/user.model";

export default {

  Query: {

    getUsers: async (_, args, context) => {

      const users = await User.find({ relations: ['vendas'] });
      return users;
    }

  }

}