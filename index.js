const http = require('http')
const { stringify } = require('querystring')

const notes = [
    {
        'id': 1,
        'content': 'Contenido item 1',
        'important': true
    },
    {
        'id': 2,
        'content': 'Contenido item 2',
        'important': true
    },
    {
        'id': 3,
        'content': 'Contenido item 3',
        'important': true
    }
]

const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    // response.end('Hello World')
    response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server Running on port ${PORT}`)