import productdao from "./dao/productdao.js";

export default class productCtrl{
    static async apiGetProducts(req, res, next){
        const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage, 10):20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
    if (req.query.price) {
      filters.price = req.query.price
    } else if (req.query.rating) {
      filters.rating = req.query.rating
    } else if (req.query.productname) {
      filters.productname = req.query.productname
    }

    const { productsList, totalNumproducts } = await productdao.getproducts({
        filters,
        page,
        productsPerPage,
      })

      let response={
          products : productsList,
          page: page,
          filters: filters,
          entries_per_page: productsPerPage,
          total_results: totalNumproducts,
      }
      res.json(response)
    }
    static async apiGetProductsById(req,res,next){
      try{
        let id= req.params.id || {}
        let product = await productdao.GetProductsById(id)
        if(!product){
          res.status(404).json({error:"Not Fount"})
          return
        }
        res.json(product)
      }
      catch(e){
        console.log(`api,${e}`)
        res.status(500).json({error: e})
      }
    }
    static async apiGetProductsByCategories(req,res){
      try{
        let categories = await productdao.getCategories()
        res.json(categories)
      }
      catch(e){
        console.log(`api,${e}`)
        res.status(500).json({error: e})
      }
    }

      
}