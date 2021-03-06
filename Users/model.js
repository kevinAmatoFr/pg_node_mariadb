import { Sequelize, DataTypes, Model } from 'sequelize';
import mysql from 'mysql2/promise.js';

const db = {
    host: process.env.MARIADB_URL,
    port: process.env.MARIADB_PORT,
    user: process.env.ROOT_USER,
    password: process.env.ROOT_PASSWORD
};
const connection = await mysql.createConnection(db);

await connection.query(`CREATE DATABASE IF NOT EXISTS chroniques_oubliees;`);

const sequelize = new Sequelize('chroniques_oubliees', process.env.ROOT_USER, process.env.ROOT_PASSWORD, {
    host: process.env.MARIADB_URL,
    dialect: 'mariadb',
    logging: false
});

export default class User extends Model {}

User.init(
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'Users',
        logging: false,
        sequelize
    }
);

sequelize
    .sync()
    .then(async () => {
        console.info('Table Users : Connected!');
        const users = await User.findAll();
        if (users.length <= 0) User.create({ user: 'John', email: 'john@doe.com', password: 'doe' });
    })
    .catch(error => {
        console.error({ message: "Users table can't connect!", error: error });
    });
