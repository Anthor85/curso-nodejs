// import "dotenv/config";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";
import { envs } from "./config/env.plugin";
import { LogSeveritiyLevel } from "./domain/entities/log.entity";
import { db } from "./prisma/db";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // await db.orm.public.LogModel.create({
  //   level: "LOW",
  //   message: "Test message LOW",
  //   origin: "App.ts",
  // });
  // const logs = await db.orm.public.LogModel.where({ level: "LOW" }).all();
  // console.log(logs);

  // Crear una colección = tablas, documento = registro
  // const newLog = await LogModel.create({
  //   message: "Test message desde Mongo",
  //   origin: "App.ts",
  //   level: LogSeveritiyLevel.high,
  // });
  // await newLog.save();

  // Leer registros
  // const logs = await LogModel.find();
  // console.log(logs);

  Server.start();
  // console.log({email: process.env.MAILER_EMAIL})
  // console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY);
}
