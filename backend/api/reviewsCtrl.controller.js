import reviewsdao from "./dao/reviewdao.js"

export default class reviewsCtrl{
    static async apipostReview(req,res,next){
        try{
            const productId = req.body.product_id
            const review = req.body.text
            const userInfo={
                name : req.body.name,
                _id : req.body.user_id
            }
            const date = new Date()
            const ReviewResponse = await reviewsdao.addReview(productId,userInfo,review,date)
            res.json({status:"success"})
        }
        catch(e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiUpdateReview(req,res){
        try{
            const reviewId= req.body.review_id
            const text = req.body.text
            const date = new Date()
            const ReviewResponse = await reviewsdao.updateReview(
                reviewId,req.body.user_id,
                text,
                date
            )
            var { error} = ReviewResponse
            if(error){
                res.status(400).json({error})
            }
            if(ReviewResponse.modifiedCount === 0){
                throw new Error("unable to update review :)")
            }
            res.json({status:"success"})
        }
        catch(e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiDeleteReviews(req, res)
    {
        try{
            const reviewId = req.query.id
            const userId = req.body.user_id
            console.log(reviewId)
            const ReviewResponse = await reviewsdao.deleteReview(
                reviewId,
                userId,
            )
            res.json({status:"success"})

        }
        catch(e){
            res.status(500).json({error: e.message})
        }
    }
}