import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB!😘😘")
const handleError = (error) => console.log("Fuck DB❌", error)
db.on("error", handleError);
db.once("open", handleOpen);