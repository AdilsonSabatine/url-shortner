import { Response, Request } from "express";
import userRepostory from "../repository/userRepository";

class UserController {
    async create(req: Request, res: Response) {
        const { email } = req.body;
        try {
            const user = await userRepostory.create(email);
            res.status(201).json(user)
        }
        catch (e) {
            console.log(e)
            if (e.code === "P2002") {
                return res.status(409).json({ error: "E-mail already in use" }); // 409 Conflict
            }
            res.status(500).json({ error: "Internal server error" });
        }

    }
}

export default new UserController();