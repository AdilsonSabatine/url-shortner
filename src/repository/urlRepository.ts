import { Url } from "@prisma/client";
import prisma from "../lib/prisma";

class UrlRepository {
    async create(original: string, short: string): Promise<Url> {
        return prisma.url.create({
            data: { original, short }
        })
    }
}

export default new UrlRepository();