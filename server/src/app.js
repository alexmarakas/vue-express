const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const bcrypt = require('bcrypt')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const users = []

// get users
app.get('/users', (req, res) => {
    res.json(users)
})

// create user
app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
        console.log('error')
    }
})

// see if user exists
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
        return res.status(400).send('cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('login succesful')
        } else {
            res.send('password incorrect')
        }
        
    } catch {
        res.status(500).send()
        console.log('error')
    }
})



app.post('/login', (req, res) => {
    res.send({
        message: `hello ${req.body.email}. you password is ${req.body.password}`
    })
})


app.listen(process.env.PORT || 8081)
