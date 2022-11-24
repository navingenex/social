// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/dbconnect'
import UserSchema from "../../../models/user";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    await dbConnect()
    const { method } = req

    switch (method) {
        case "GET":
            try {
                const users = await UserSchema.find();
                res.status(200).json(users)
            } catch (error) {
                res.status(400).json(error)
            }

            break;
        case "POST":
            const { userName, password, email } = req.body;
            if (!userName || !password || !email) {
                res.status(400).json({ message: "bad request" })
                break;
            }
            try {
                const user = new UserSchema(req.body)
                await user.save();
                res.status(200).json(req.body)
            } catch (error: any) {
                res.send(error)
            }
            break;
        default:
            break;
    }
}
