import { Router } from "express";
import offerRouter from './offerRoutes.js';
import userRotes from './userRoutes.js'

const router = new Router();

router.use('/', offerRouter);
router.use('/', userRotes)

export default router