const { Router } = require("express")
const { userModel, purchaseModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken")

const { JWT_USER_PASSWORD } = require("../config")

const { userMiddleware } = require("../middlewares/user")

const userRouter = Router()

userRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password ( bcrypt )

    // TODO: put inside a try-catch block
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "SignUp Succeeded"
    })
})

userRouter.post("/login", async function(req, res){
    const { email, password } = req.body;

    // TODO: ideally password should be hashed

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if (user){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

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

userRouter.get("/purchases", userMiddleware, async function(req, res){
    const userId = req.userId

    const purchases = await purchaseModel.find({
        userId
    })

    const courseData = await courseModel.find({
        _id: { $in: purchases.map(x => x.courseId) }
    })

    res.json({
        purchases,
        courseData
    })
})

module.exports = {
    userRouter: userRouter
}