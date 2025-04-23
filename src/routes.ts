import { Router } from 'express';
import userController from './controller/userController';
import urlController from './controller/urlController';

const router = Router();

router.post("/user", (req, res) => {
    userController.create(req, res);
});

router.post("/url", (req, res) => {
    urlController.create(req, res);
});

router.get("/:short", (req, res) => {
    urlController.redirect(req, res);
});

router.delete("/url", (req, res) => {
    urlController.delete(req, res);
})

export default router;
