// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/dbconnect'
type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await dbConnect();
    const {
        query: { id },
        method,
    } = req
    const { userName, password, email } = req.body
    if (method === "POST") {


    }



}
