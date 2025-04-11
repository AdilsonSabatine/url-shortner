import { Router } from 'express';
import userController from './controller/userController';

const router = Router();

router.post("/user", (req, res) => {
    userController.create(req, res);
})

export default router;
