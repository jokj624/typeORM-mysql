const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE as string;
const MYSQL_USER: string = process.env.MYSQL_USER as string;
const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD as string;
const NODE_ENV: string = process.env.NODE_ENV as string || "development";

export = {
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
    NODE_ENV
}