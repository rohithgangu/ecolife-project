import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
let product_list

export default class productdao{
    static async injectDB(conn){
        if (product_list){
            return
        }
        try{
            product_list = await conn.db(process.env.PRODUCTS_NS).collection("products_list")
        }
        catch (e){
            console.error(`unable to establish handle in productdao: ${e}`)
        }
    }

    static async getproducts ({
        filters = null,
        page =0,
        productsPerPage = 10,
        
    }={}){
        let query
            if (filters){
                if("productname" in filters){
                    query = {$text : {$search : filters["productname"]}}
                }
                else if ("price" in filters) {
                    query = { "price": { $eq: filters["price"] } }
                } 
                else if ("rating" in filters) {
                    query = { "rating": { $eq: filters["rating"] } }
                }
            }
        
        let cursor
        try {
            cursor = await product_list.find(query)
          } 
        catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { productsList: [], totalNumproducts: 0 }
        }
        
        const displayCursor = cursor.limit(productsPerPage).skip(productsPerPage * page)
        try {
            const productsList = await displayCursor.toArray()
            const totalNumproducts = await product_list.countDocuments(query)
      
            return { productsList, totalNumproducts }
          }
        catch (e) {
            console.error(
              `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
        return { productsList: [], totalNumproducts: 0 }
        }
    }
    static async GetProductsById(id){
        try{
            const pipeline=[
                {
            $match: {
                _id: new ObjectId(id),
            },
            },
            {$lookup: {from:"reviews",
                let:{
                    id:"$_id"
                },
                pipeline: [{
                    $match :{
                        $expr:{
                            $eq: ["$product_id","$$id"],
                        },
                    },
                },
                {
                    $sort: {
                        date: -1,
                    },
                },
            ],
            as:"reviews",
            },
            },
        {
            $addFields: {
                reviews:"$reviews",
            },
        },
        ]
        return await product_list.aggregate(pipeline).next()
        }
        catch(e){
            console.error(`something went wrong in getProductById: ${e}`)
            throw e
        }
    }
    static async getCategories(){
        let categories=[]
        try{
            categories = await product_list.distinct("category")
            return categories
        }
        catch(e){
            console.error(`unable to get categories :${e}`)
            return categories
        }
    }


}