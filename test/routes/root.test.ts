import {FastifyInstance} from "fastify";
import {buildApp, closeApp} from "../helper";

describe('/root',  () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    app = await buildApp();
  });

  afterEach(async () => {
    await closeApp(app);
  });

  it('default root route', async () => {
    const app = await buildApp()

    const res = await app.inject({
      url: '/'
    })

    expect(JSON.parse(res.payload)).toStrictEqual({ root: true });
  })
});

