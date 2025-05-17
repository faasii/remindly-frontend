import { getServerSession, type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";



export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            httpOptions: {
                timeout: 40000,
            },
            authorization: {
                params: {
                    scope: "openid email profile https://www.googleapis.com/auth/calendar.readonly",
                    prompt: "consent",
                    access_type: "offline",
                },
            },
        }),
    ],
    session: {
        maxAge: 86400,
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, account, user, session }: any) {
            if (account?.id_token) {
                const { id_token, access_token, refresh_token } = account

                const myHeader = new Headers()
                myHeader.append("authorization", `Bearer ${id_token}`)
                myHeader.append("access_token", `Bearer ${access_token}`)
                myHeader.append("refresh_token", `Bearer ${refresh_token}`)


                const res = await fetch(process.env.BACKEND_URL + "/api/v1/auth/login/google",
                    {
                        method: "POST",
                        headers:myHeader,
                    }
                );
                const resParsed = await res.json();
                const userData: any = resParsed?.data

                const data = {
                    user: {
                        id: userData?.user?.id,
                        userName: userData?.user?.name,
                        email: user?.email || "",
                    },
                    token: userData?.token,
                }
                return data
            }

            if (user) {
                const data = {
                    user: {
                        id: user?.user?.id,
                        userName: user?.user?.name,
                        email: user?.email,
                    },
                    token: user?.token,
                };
                return data
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user = token.user;
            session.token = token.token;
            return session;
        },
    },
    pages: {
        signIn: "/", //(4) custom signin page path
    },
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
