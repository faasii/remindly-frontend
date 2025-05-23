// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            username: string,
            email: string,
            id: string | number,
            photo?: string
        },
        token: string
    }

}


declare module "next-auth/jwt" {
    interface JWT {
        user: {
            username: string,
            email: string,
            photo:string
        },
        token: string
    }

}