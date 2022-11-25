// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/dbconnect'
import User from "../../../models/User";
import { CommonFunction } from '../../../utils/commonFunction';
import { DbHelper } from '../../../utils/dbHelper';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    await dbConnect()
    const { method } = req
    const commonFunction = new CommonFunction();
    const dbHelper = new DbHelper();
    switch (method) {
        case "GET":
            try {
                const users = await User.find();
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
                const existingUser = await dbHelper.findOne(userName);
                if (existingUser) {
                    res.status(400).json({ message: "User already exist" });
                    return;
                }
                const hash = await commonFunction.genHasPassword(password)
                const user = new User({ userName, email, password: hash })
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
