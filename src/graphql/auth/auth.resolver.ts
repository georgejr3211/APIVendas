import * as jwt from 'jsonwebtoken';
import keys from '../../config/keys';

export default {

  Mutation: {

    generateToken: (_, { user }, context) => {
      const payload = {
        name: user.nome,
        password: user.password
      }

      return jwt.sign(payload, keys.SECRET, { expiresIn: '1h' });
    }

  }

}