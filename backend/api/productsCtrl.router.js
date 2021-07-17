import  express from "express"

import productCtrl from "./productCtrl.controller.js"
import reviewCtrl from "./reviewsCtrl.controller.js"

const router = express.Router()

router.route("/").get(productCtrl.apiGetProducts)
/* router.route("/").post(productCtrl.apiPostProduct)
 */router.route("/id/:id").get(productCtrl.apiGetProductsById)
router.route("/categories").get(productCtrl.apiGetProductsByCategories)
router
    .route("/review")
    .post(reviewCtrl.apipostReview)
    .put(reviewCtrl.apiUpdateReview)
    .delete(reviewCtrl.apiDeleteReviews)

export default router
