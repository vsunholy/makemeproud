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
       -- LIMIT 0, 3
       
    `;
    con.query(sql, (err, data) => {
        if (err) {
            res.send('Klaida gaunant duomenis');
            return;
        }
        res.json(data);
    });

});

app.get('/read-clients', (req, res) => {
    const sql = `
        SELECT *
        FROM clients
    `;
    con.query(sql, (err, data) => {
        if (err) {
            res.send('Klaida gaunant duomenis');
            return;
        }
        res.json(data);
    });

});
app.get('/read-phones', (req, res) => {
    const sql = `
        SELECT *
        FROM phones
    `;
    con.query(sql, (err, data) => {
        if (err) {
            res.send('Klaida gaunant duomenis');
            return;
        }
        res.json(data);
    });

});
app.get('/read-full', (req, res) => {
    const sql = `
        SELECT c.id, name, p.id AS phone_id, client_id, number
        FROM clients AS c
        INNER JOIN phones AS p
        ON c.id = p.client_id
`;
    con.query(sql, (err, data) => {
        if (err) {
            res.send('Klaida gaunant duomenis');
            return;
        }
        res.json(data);
    });
});


app.post('/create', (req, res) => {
    // secure create
    const sql = `
        INSERT INTO trees (name, height, type)
        VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.name, req.body.height, req.body.type], (err) => {
        if (err) {
            res.send('Klaida įrašant duomenis');
            return;
        }
        res.send('OK');
    });
})



app.delete('/delete/:id', (req, res) => {

    //secure delete 
    const sql = `
DELETE FROM trees
WHERE id = ?
`;

    con.query(sql, [req.params.id], (err) => {
        if (err) {
            res.send('Klaida trinant duomenis');
            return;
        }
        res.send('OK');
    });

});

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/update/:id', (req, res) => {

    const sql = `
        UPDATE trees
        SET height = ?, name = ?
        WHERE id = ?
    `;

    con.query(sql, [req.body.height, req.body.name, req.params.id], (err) => {
        if (err) {
            res.send('Klaida atnaujinant duomenis');
            return;
        }
        res.send('OK');
    });

});


app.listen(port, () => {
    console.log(`Duonbazynas darbui pasiruošęs ant ${port} porto!`);
});
