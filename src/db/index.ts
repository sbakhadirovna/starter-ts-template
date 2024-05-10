import config from "../shared/config";
import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(
      `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
    );
    console.log("connected to db");
  } catch (error) {
    console.log("error connecting to db", error);
    throw error;
  }
}
