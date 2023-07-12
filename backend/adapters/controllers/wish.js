import addToWishUsecase from "../../applications/usecases/user/wish/addToWish.js";
import getUserWishesUsecase from "../../applications/usecases/user/wish/getUserWishes.js";
import removeWishUsecase from "../../applications/usecases/user/wish/removeWish.js";
import getWishDetailsByIdUseCase from "../../applications/usecases/user/wish/getWishDetailsById.js"
import paymentUseCase from "../../applications/usecases/common/payment.js";

export default function wishes(
    wishRepositoriesInterface,
    wishRepositoriesImplements,
    paymentServiceInterface,
    paymentServicesImplements
) {

    const wishDb = wishRepositoriesInterface(wishRepositoriesImplements())
    const paymentServices = paymentServiceInterface(paymentServicesImplements())

    const addToWish = (req, res) => {
        const data = req.body;
        addToWishUsecase(data, wishDb).then((response) => {

            res.json(response)


        }).catch((err) => console.log(err))
    }

    const fetchUserwishes = (req, res) => {
        console.log(req?.query?.userId)
        getUserWishesUsecase(req?.query?.userId, wishDb).then((response) => {
            console.log(response);
            res.json(response)
        }).catch((err) => console.log(err));

    }

    const removeWish = (req, res) => {
        const { wishid } = req.query;
        removeWishUsecase(wishid, wishDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))

    }
    const findWishDetailsById = (req, res) => {
        const { wishId } = req?.query
        getWishDetailsByIdUseCase(wishId, wishDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))

    }
    const isPayment = (req, res) => {
       
        const payableAmount=parseInt(req?.body?.totalPayableAmount)
        console.log(payableAmount, 'total payment is this');
        paymentUseCase(payableAmount, paymentServices).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }
    const isPaymentDone=(req,res)=>{
       console.log(req.body,'data comes');
        res.json({status:true})
    }

    return {
        addToWish,
        fetchUserwishes,
        removeWish,
        findWishDetailsById,
        isPayment,
        isPaymentDone

    }
}