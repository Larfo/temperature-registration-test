const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const port = process.env.PORT || 3001;


app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


const connection = mysql.createConnection({
  host     : 'f80b6byii2vwv8cx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user     : 'ak75mqu8o6dg5hsj',
  password : 'd875a0fdcd4l48no',
  database : 'd7vsq6ucydllsz9e',
  port     : 3306
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

app.get("/api/getTemperatures",(req,res) => {
    connection.query('SELECT * from temperatures', (err, rows) => {
        if(err) throw err;
        res.send(JSON.stringify(rows))
    });
});

app.post("/api/insertTemperature",(req,res) => {
    var temperature = req.body.temperature
    var monthId = req.body.monthId
    connection.query('INSERT INTO temperatures (temperature, month) VALUES (' + temperature + ', ' + monthId + ')', (err, rows) => {
        if(err) throw err;
        console.log('Data inserted', rows);
    });
});

app.listen(port, () => {
    console.log('Server is running at port ' + port);
});