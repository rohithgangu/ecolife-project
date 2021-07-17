import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import productdao from "./api/dao/productdao.js";
import reviewdao from "./api/dao/reviewdao.js"

dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.PRODUCTS_DM_URI,{
        poolSize:50,
        wtimeout:2500,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
)
.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    await productdao.injectDB(client)
    await reviewdao.injectDB(client)
    app.listen(port , () =>{
        console.log(`listening on port ${port}`)
    }
    )
})