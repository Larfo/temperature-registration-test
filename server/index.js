const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

const server = app.listen(process.env.PORT || 3001, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

const dbConfig = {
    user: "utphgy1bohgicxve",
    password: "siecr73bnoi3gbvg",
    server: "q2gen47hi68k1yrb.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
    database: "csqg7akfkmtq12rr"
}

const executeQuery = function (res, query) {
    sql.connect(dbConfig, function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    res.send(result);
                }
            });
        }
    });
}

app.get("/api/getTemperatures", function (req, res) {
    var query = "SELECT * FROM temperatures";
    executeQuery(res, query);
})

app.post("/api/insertTemperature", function (req, res) {
    var query = "INSERT INTO temperatures (temperature, month) VALUES (1, 2)";
    executeQuery(res, query);
})
