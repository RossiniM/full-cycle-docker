const express = require('express')
const mysql = require('mysql')

const app = express()

const port = 3000

const config = {
    host: "mysql",
    user: "root",
    password: "root",
    database: "nodedb"
}

const connection = mysql.createConnection(config)

const SQL = `INSERT INTO people(name) values('Rossini')`

connection.query(SQL)

connection.end()

app.get("/", (req, res) => {
    res.send('<h1>Full Cycle</h1>')
})
app.listen(port, () =>console.log(" I am listening at port 3000"))