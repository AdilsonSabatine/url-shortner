import { Response, Request } from "express";
import urlRepository from "../repository/urlRepository";
import { nanoid } from "nanoid-cjs";

class UrlController {
    async create(req: Request, res: Response) {
        const { original } = req.body;
        try {
            const short = nanoid(6);
            const user = await urlRepository.create(original, short);
            res.status(201).json(user)
        }
        catch (e) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async redirect(req: Request, res: Response) {
        const { short } = req.params;
        try {
            const url = await urlRepository.getUrlByShort(short);
            if (url)
                res.redirect(url.original);
        }
        catch (e) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

export default new UrlController();