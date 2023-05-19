import express from "express";
import { userSignup,userLogin } from "../controllers/UserController.js";
import { getProducts,getProductbyId } from "../controllers/ProductController.js";

const router = express.Router();

router.post("/signup",userSignup);
router.post("/login",userLogin);

router.get("/products",getProducts);


router.get('/product/:id',getProductbyId)
export default router;
