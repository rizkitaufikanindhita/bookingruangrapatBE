import express, { Request, Response } from "express";
import dotenv from "dotenv"
import cors from "cors"
import indexEndpoint from "./routes/index"


dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.get("/",(_req: Request,res: Response)=>{
  res.json({
    msg: "server up"
  })
})

app.use("/api/v1", indexEndpoint)

app.listen(port, ()=>{
  console.log(`server dengan port ${port} berhasil running`)
})
