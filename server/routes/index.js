import { Router } from "express";
import offerRouter from './offerRoutes.js';
import userRotes from './userRoutes.js'
import reviewRouter from './reviewRoutes.js'
import { toggleFavorite } from "../controllers/offerController.js";

const router = new Router();

router.use('/', offerRouter);
router.use('/', userRotes);
router.use('/comments', reviewRouter)
router.post('/favorite/:offerId/:status', toggleFavorite);

export default router