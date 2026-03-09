const express = require("express")

const app = express()

app.post("/user/signup", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

app.post("/user/login", function(req, res){
    res.json({
        message: "login endpoint"
    })
})

app.get("/user/purchases", function(req, res){
    res.json({
        message: "purchases endpoint"
    })
})

app.post("/course/purchase", function(req, res){
    res.json({
        message: "course purchase endpoint"
    })
})

app.get("/courses", function(req, res){
    res.json({
        message: "courses endpoint"
    })
})

app.listen(3000)