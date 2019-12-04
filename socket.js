const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8090 })

console.log('server listening...');
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  ws.send('hi!')
})
