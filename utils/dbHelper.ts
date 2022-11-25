import dbConnect from "./dbconnect";
import User from "../models/User"
export class DbHelper {
    public async connectDb() {
        await dbConnect();
    }
    public async findOne(userName: string): Promise<any> {
        try {
            await this.connectDb();
            const user = User.findOne({ userName: userName });
            return user;
        } catch (error) {
            return error
        }
    }
}