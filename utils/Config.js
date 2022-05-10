import dotenv from "dotenv";

dotenv.config();

export default {
    app: {
        port: process.env.SERVER_PROT,
    },
    db: {
        username: process.env.MARIADB_ROOT_USER,
        password: process.env.MARIADB_ROOT_PASSWORD,
        host: process.env.MARIADB_URL,
        port: process.env.MARIADB_PORT,
    },
};
