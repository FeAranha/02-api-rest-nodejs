import fastify from "fastify";

const app = fastify()

app.get('/hello', () => {
  return 'Olar'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running!')
})