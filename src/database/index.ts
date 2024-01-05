import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "172.17.0.2",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "databasetest",
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
