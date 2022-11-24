/* This is a database connection function*/
import mongoose from "mongoose";

const connection = {}; /* creating connection object*/

export default async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection?.isConnected) {
    console.log("************database connected*************");
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect("mongodb://localhost:27017/social", {
    useNewUrlParser: true,
  });
  //   console.log(db.connections);
  if (db) connection.isConnected = db.connections[0]?.readyState;
}
