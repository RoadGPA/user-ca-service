'use strict'

// Read the .env file.
require('dotenv').config();

// Require the framework
import Fastify from 'fastify';

// Require library to exit fastify process, gracefully (if possible)
const closeWithGrace = require('close-with-grace')

// Instantiate Fastify with some config
const app = Fastify({
  logger: true
});

// Register your application as a normal plugin.
const appService = require('./app.js')
app.register(appService)

// delay is the number of milliseconds for the graceful close to finish
// @ts-ignore
const closeListeners = closeWithGrace({ delay: process.env.FASTIFY_CLOSE_GRACE_DELAY || 500 }, async function ({ err }) {
  if (err) {
    app.log.error(err)
  }
  await app.close()
})

app.addHook('onClose', async (instance, done) => {
  closeListeners.uninstall()
  done()
})

// Start listening.
const port = process?.env?.PORT ? Number.parseInt(process?.env?.PORT) : 3000;
app.listen({ port }, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
