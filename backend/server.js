import  express  from "express";
import cors from "cors";
import products from "./api/productsCtrl.router.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/products", products)
app.use("*", (req,res) => res.status(404).json({error:"file not fould"}))

export default app 