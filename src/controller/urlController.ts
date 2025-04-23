import { Response, Request } from "express";
import urlRepository from "../repository/urlRepository";
import { nanoid } from "nanoid-cjs";

class UrlController {
    async create(req: Request, res: Response) {
        const { original } = req.body;
        try {
            const short = nanoid(6);
            const url = await urlRepository.create(original, short);
            res.status(201).json(url)
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
            else
                res.status(404).json({error: "Shot url not found"})
        }
        catch (e) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async delete(req: Request, res: Response) {
        const { short } = req.body;

        try {
            urlRepository.delete(short);
            res.status(200).json({ message: "Url deleted" });
        }
        catch (e) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

export default new UrlController();