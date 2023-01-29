// This file contains code that we reuse between our tests.
import {FastifyInstance} from "fastify";

const helper = require('fastify-cli/helper.js')
import * as path from 'path'

const AppPath = path.join(__dirname, '..', 'src', 'app.ts')

// Fill in this config with all the configurations
// needed for testing the application
async function config () {
  return {}
}

// Automatically build and tear down our instance
async function buildApp () {
  // you can set all the options supported by the fastify CLI command
  const argv = [AppPath]

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  return await helper.build(argv, await config())
}

async function closeApp(app: FastifyInstance): Promise<void> {
  app && await app.close()
}

export {
  config,
  buildApp,
  closeApp
}
