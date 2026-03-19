const { Router } = require("express")

const adminRouter = Router()

const { adminModel } = require("../db")

const jwt = require("jsonwebtoken")

const JWT_ADMIN_PASSWORD = "JWT_ADMIN_PASSWORD"

adminRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password ( bcrypt )

    // TODO: put inside a try-catch block
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "SignUp Succeeded"
    })
})

adminRouter.post("/login", async function(req, res){
    const { email, password } = req.body;

    // TODO: ideally password should be hashed

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if (admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        // Do cookie logic

        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
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