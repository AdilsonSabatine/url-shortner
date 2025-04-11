import { User } from "@prisma/client";
import prisma from "../lib/prisma";

class UserRepository {
    async create(email: string): Promise<User> {
        return prisma.user.create({
            data: { email }
        })
    }
}

export default new UserRepository();