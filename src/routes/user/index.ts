import {FastifyPluginAsyncTypebox} from "@fastify/type-provider-typebox";
import {Type} from "@sinclair/typebox";

import {
  SaveUserRequestBodySchema, SaveUserRequestBodyType
} from "../../shared/Acme/User/UseCaseSchemasAndTypes/SaveUserSchema";

import {SaveUserController} from "../../Acme/User/L3_InterfaceAdapters/SaveUserController";
import {userFactoryInstance, userRepositoryInstance} from "../../shared/Acme/User/UserAssets";

// fastify-cli eject: https://www.npmjs.com/package/fastify-cli
// https://www.fastify.io/docs/latest/Reference/TypeScript/#typebox
const saveUser: FastifyPluginAsyncTypebox = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: { user: SaveUserRequestBodyType } }>(
    '/',
    {
      schema: {
        body: Type.Object({ user: SaveUserRequestBodySchema }),
        response: {
          200: Type.Undefined(),
          500: Type.Object({
            message: Type.Union([Type.Undefined(), Type.String()]),
            code: Type.Union([Type.Undefined(), Type.String()])
          })
        }
      }
    },
    async function (request, reply) {
      try {
        const user = request.body.user;

        const userRepository = await userRepositoryInstance();
        const userFactory = userFactoryInstance();

        const saveUserController: SaveUserController = new SaveUserController(userRepository, userFactory);
        await saveUserController.execute(user);
        
      } catch (err) {
        const _err = err as Error;
        return reply
          .status(500)
          .send({
            message: `${_err.name}: ${_err?.message}`,
            code: _err?.code
          });
      }
  });
}

export default saveUser;
