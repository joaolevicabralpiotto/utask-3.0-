const fastify = require('fastify')({ logger: true })

fastify.get('/status', async (request, reply) => {
  return { status: 'Operacional', projeto: 'uTask 3.0' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    console.log("🚀 Servidor rodando em http://localhost:3000")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()