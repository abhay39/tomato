import express from 'express';
import { listOfUsers, signInUser, signUpUser } from '../controllers/AuthControlllers.js';
import { verifyUser } from '../middleware/AuthMiddleware.js';

const router=express.Router();

router.get("/getCurrentUserDetails/:token",verifyUser, listOfUsers);
router.post("/registerAccount",signUpUser);
router.post("/loginAccount",signInUser);

export default router;