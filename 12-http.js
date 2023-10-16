const http= require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our the server')
     }
    if(req.url === '/about'){
        res.end('here is the short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>ther is no page is found</p>
    <a href="/">back home </a>
    `)
})
server.listen(5000)