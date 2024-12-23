const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');


const port = 6457;
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miskas'
});

// con.connect((err) => {
//     if (err) {
//         console.log('Klaida prisijungiant prie DB');
//         return;
//     }
//     console.log('Prisijungeme prie DB');
// });


app.get('/read', (req, res) => {

    const sql = `
        SELECT id, name, height, type
        FROM trees
       -- WHERE type <> 'Palme'
       -- ORDER BY name, height DESC
       LIMIT 0, 3
       
    `;
    con.query(sql, (err, data) => {
        if (err) {
            res.send('Klaida gaunant duomenis');
            return;
        }
        res.json(data);
    });

});














app.listen(port, () => {
    console.log(`Duonbazynas darbui pasiruošęs ant ${port} porto!`);
});
