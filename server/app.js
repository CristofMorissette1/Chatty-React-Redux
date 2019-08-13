const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 8989})

const users = []

const broacast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.Open && client !== ws) {
            client.send(JSON.stringify(data))
        }
    })
}

wss.on('connection', (ws) => {
    let index
    ws.on('message', (message) => {
        const data = JSON.parse(message)
        switch (data.type){
            case "ADD_USER":
                index = users.length
                users.push({name: data.name, id: index + 1})
                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    users
                }))
            broacast({
                type: 'USERS_LIST',
                users
            }, ws)
            break
            case "ADD_MESSAGE":
                broadcast({
                    type: "ADD_MESSAGE",
                    message: data.message,
                    author: data.author
                }, ws)
                break
                default:
                    break
        }
    })

wss.on('close', () => {
    users.splice(index, 1)
    broadcast({
        type: 'USERS_LIST',
        users
    }, ws)
})
})