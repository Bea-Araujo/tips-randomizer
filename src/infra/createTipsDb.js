import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/infra/database.db');

const createTipTable = () => `
CREATE TABLE IF NOT EXISTS "TIPS"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CONTENT" VARCHAR(500)
    );
`;

function selection(res) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM TIPS;', [], (error, rows) => {
            try {
                if (error) throw new Error('An error has occured: Unable to to find tip');

                const result = rows[[Math.floor(Math.random() * rows.length)]]
                resolve(result)
            } catch (e) {
                console.log(e)
            }
        })

    }).then((result) => {
        res.send(result)
    })
}

function createTable(table) {
    db.run(table, (error) => {
        try {
            if (error) throw new Error('Unable to create table: an error has occured or the table has already been created');
        } catch (e) {
            console.log(e)
        }
    })
}

export { createTable, createTipTable, selection }