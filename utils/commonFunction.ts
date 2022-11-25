import bcrypt from "bcrypt";
export class CommonFunction {
    saltRounds = 10;

    public async genHasPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash
    }
    public async comaprePassword(password: string, hash: string): Promise<boolean> {
        const found = await bcrypt.compare(password, hash);
        return found;
    }

}