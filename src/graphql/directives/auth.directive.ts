import { SchemaDirectiveVisitor } from "graphql-tools";
import { defaultFieldResolver } from "graphql";

export class AuthDirective extends SchemaDirectiveVisitor {

  visitFieldDefinition(field: any) {

    const { resolve = defaultFieldResolver } = field;

    field.resolve = async (...args: any) => {

      const [, , auth] = args;


      const token = auth.token;

      if (!token || !(Object.keys(token).length)) {
        throw new Error('Sem autorização!');
      }

      const result = await resolve.apply(this, args);
      return result;

    }

  }

}
