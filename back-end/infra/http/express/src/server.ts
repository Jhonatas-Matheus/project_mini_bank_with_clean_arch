import "dotenv/config";

import { AppDataSource } from "../../../db/postgres/data.source";
import { app } from "./app";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.listen(2580, () => {
  console.log("APlicação rodando na porta 2580");
});
