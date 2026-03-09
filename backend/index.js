const express = require("express")

const { userRouter } = require("./routes/user")
const { adminRouter } = require("./routes/admin")
const { courseRouter } = require("./routes/course")

const app = express()

app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/course", courseRouter)

app.listen(3000)