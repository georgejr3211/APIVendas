import * as jwt from 'jsonwebtoken';
import keys from '../../config/keys';

export default {

  Mutation: {

    generateToken: (_, { user }, context) => {
      const payload = {
        id: 1,
        name: user.nome,
        password: user.password
      }

      return jwt.sign(payload, keys.SECRET, { expiresIn: '1h' });
    }

  }

}