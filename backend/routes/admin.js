const { Router } = require("express")

const adminRouter = Router()

const { adminModel } = require("../db")

adminRouter.post("/signup", function(req, res){
    res.json({
        message: "admin signup endpoint"
    })
})

adminRouter.post("/login", function(req, res){
    res.json({
        message: "admin login endpoint"
    })
})

// adminRouter.use(adminMiddleware)

adminRouter.post("/course", function(req, res){
    res.json({
        message: "admin course creation endpoint"
    })
})

adminRouter.put("/course", function(req, res){
    res.json({
        message: "admin course edit endpoint"
    })
})

adminRouter.get("/course/preview", function(req, res){
    res.json({
        message: "admin course get endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}