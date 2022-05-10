import { Sequelize, DataTypes, Model } from "sequelize";

import config from "../utils/config.js";

const sequelize = new Sequelize(
    "chroniques_oubliees",
    config.db.username,
    config.db.password,
    {
        host: process.env.MARIADB_URL,
        dialect: "mariadb",
        logging: false,
    }
);

export default class User extends Model {}

User.init(
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        modelName: "Users",
        logging: false,
        sequelize,
    }
);

sequelize
    .sync()
    .then(async () => {
        console.info("Table Users : Connected!");
        const users = await User.findAll();
        // if (users.length <= 0) User.create({ name: "kevin" });
    })
    .catch((error) => {
        console.error({ message: "Users table can't connect!", error: error });
    });
