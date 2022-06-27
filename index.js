import express from "express";
import { tipReceiver } from "./src/controller/tipReceiverController.js";
import { db } from "./src/infra/db.js";

const app = express();
app.use(express.json())

tipReceiver(app, db)

app.listen(3000, () => {
    console.log('Server online')
})