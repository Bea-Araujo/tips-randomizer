import { Tip } from "../model/tipReceiverModel.js";
import { createTable, createTipTable, selection } from "../infra/createTipsDB.js";
import { populateTable, populateTip } from "../infra/populateTipsDb.js";

export const tipReceiver = (app, db) => {
    app.get("/db", (req, res) => {
        res.send(db.tips)
    })

    app.get("/tip", (req, res) => {
        selection(res)
    })

    app.post("/create", (req, res) => {
        const body = req.body;
        const newTip = new Tip(body.content)
        db.tips.push(newTip)
        createTable(createTipTable())
        populateTable(populateTip(newTip.content))
        res.send(body)
    })
}