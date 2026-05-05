const fastify = require('fastify')({ logger: true })


 fastify.get('/', async () => {
  return { message: 'uTask 3.0 API - Online', version: '1.0.0' }
 })


fastify.get('/status', async () => {
  return { status: 'ok' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()