import express from "express";
import mongoose from "mongoose";
import { router as DiaryRoute } from "./src/routes/diary.route.js";
import "dotenv/config";

const app = express();

// we use this middle ware because we are not allowed to pass json by node by default
app.use(express.json());

app.use("/api/diaries", DiaryRoute);

// mongoose
//   .connect(
//     `mongodb+srv://guhantamilvanan:aZQobScuPTl0Vntb@basiccluster.ravt0mm.mongodb.net/basic?retryWrites=true&w=majority&appName=BasicCluster`
//   )
//   .then(() => {
//     console.log("connected to database");

//     // this piece of code will start listening from port 3000, if changed to 8000 it will be listening to 8000
//     app.listen(3000, () => {
//       console.log("listening on port 3000");
//     });
//   })
//   .catch(() => {
//     console.log("could not connect to db");
//   });

mongoose
  .connect(process.env.MONGO_DB_CONNECTION_STRING)
  .then(() => {
    console.log("connected to database");

    // this piece of code will start listening from port 3000, if changed to 8000 it will be listening to 8000
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch(() => {
    console.log("could not connect to db");
  });
