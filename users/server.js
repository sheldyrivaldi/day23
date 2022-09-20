const express = require('express')
const app = express()
app.use(express.json()) //json parser

// Dummy Data
const users = {
    1: {
        fullName: "Sheldy Rivaldi",
        username: "sheldy",
        address: "Bekasi"
    }
}

// get list of users
app.get('/api/users', function(req,res){
    res.json(users)
})

// add a new user
app.post('/api/users', function(req,res){
    let newUser = req.body
    let id = Object.keys(users).length + 1 // create id auto_increment
    users[id] = newUser
    res.json(users)
})

// running on port 3000
app.listen(3000, function(){
    console.log("running on port 3000")
})