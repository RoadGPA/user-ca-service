import {buildApp, closeApp} from '../helper'
import {FastifyInstance} from "fastify";

describe("/Example", () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    app = await buildApp();
  });

  afterEach(async () => {
    await closeApp(app);
  });

  it('example is loaded', async () => {
    const app = await buildApp()

    const res = await app.inject({
      url: '/example'
    })

    expect(res.payload).toStrictEqual('this is an example');
  })
});

