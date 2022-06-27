import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/infra/database.db');

const populateTip = (tip) =>
    `INSERT INTO TIPS (CONTENT) 
VALUES 
("${tip}");
`

function populateTable(data) {
    db.run(data, (error) => {
        try {
            if (error) throw new Error('An error has occured: unable to populate table');
        } catch (e) {
            console.log(e)
        }
    })
}

export { populateTable, populateTip }