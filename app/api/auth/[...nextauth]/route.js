import NextAuth from "next-auth/next";
import Googleprovider from 'next-auth/providers/google';
import User from "@/models/user";
import { connectToDB } from "@/utils/database";
console.log({
    clientId: process.env.GOOGLE_ID,
    clientServer: process.env.GOOGLE_CLIENT_SECRET,
})
const handler = NextAuth({
    providers: [
        Googleprovider({
            clientId: process.env.GOOGLE_ID,
            clientServer: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {
        const SessionUser = await User.findOne({
            email: session.user.email,
        })
        session.user.id = SessionUser._id.toString();
        return session;
        
    },          
    async signIn({profile}) {
        try{
            // serverless -> lambda -> db mongo
            await connectToDB();
            // check if a user already exists
            const userExists = await User.findOne({email: profile.email});

            // if not, create a new
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.username.replace(" ", "").toLowerCase(),
                    image: profile.picture,
                });
            }
            return true;
        }
        catch(e){
            console.log(e)
            return false;
        }

    },
    

})

export {handler as GET, handler as POST}