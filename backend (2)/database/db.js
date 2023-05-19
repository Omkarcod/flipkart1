import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-t9lrc2w-shard-00-00.foebgd0.mongodb.net:27017,ac-t9lrc2w-shard-00-01.foebgd0.mongodb.net:27017,PROJECT0/?ssl=true&replicaSet=atlas-ul0yds-shard-0&authSource=admin&retryWrites=true&w=majority`

  try {
    await mongoose.connect(URL, {});
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
