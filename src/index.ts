import express from "express"
const app = express()
import diaryRoutes from "./routes/diaries"

app.use(express.json())

const PORT = 3000

app.get("/ping",(_,res)=>{
    console.log("someone pinged here!!")
    res.send("pong")
})
app.use("/api/diaries",diaryRoutes)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})