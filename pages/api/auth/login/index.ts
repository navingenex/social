import type { NextApiRequest, NextApiResponse } from "next";
import { CommonFunction } from "../../../../utils/commonFunction";
import dbConnect from "../../../../utils/dbconnect";
import { DbHelper } from "../../../../utils/dbHelper";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const { method } = req;
  const dbHelper = new DbHelper();
  const commonFunction = new CommonFunction();
  if (method === "POST") {
    const { userName, password } = req.body;
    if (!userName || !password)
      res.status(400).json({ message: "username and password required" })
    try {
      const user = await dbHelper.findOne(userName);

      if (user) {
        const isAuthenticated = await commonFunction.comaprePassword(password, user.password);

        if (isAuthenticated)
          res.status(200).send({ result: { userName: user.userName, email: user.email }, message: "login success" })
        else
          res.status(400).json("wrong username or  password")
      }
    } catch (error) {
      res.status(400).json(error)
    }
  }

}
