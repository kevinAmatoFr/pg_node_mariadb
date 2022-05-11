# pg_node_mariadb

Playground project for Node.js, Mariadb and Sequelize.

## Start the project

### What do you need

- Docker
- Node.js
- Npm

### Commands

Create the database container.

```
docker run --detach --name some-mariadb -p 3306:3306 -v maria_db_volume:/var/lib/mysql --env MARIADB_USER=my_not_so_cool_user --env MARIADB_PASSWORD=my_cool_secret --env MARIADB_ROOT_PASSWORD=my-secret-pw  mariadb:latest
```

Install the nodes modules

```
npm install
```

### Environment Variables

Rename the file `.env.example` to `.env`.

### Start

`npm run start`