const http = require('http') //core module
const express = require('express') //implemented through package
const app = express() 

const route = express.Router() //to use route

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ "extended": false }))
app.use(bodyparser.json())

route.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Get Request Success",
    })
})

route.post('/post', (req, res, next) => {
    // req.body
    // console.log(req)
    const body = req.body
    res.status(200).json({
        message: "Post Request Success",
        data: body
    })
})

app.use(route)

http.createServer(app).listen(3003, () => {
    console.log('Server Started HERE')
})