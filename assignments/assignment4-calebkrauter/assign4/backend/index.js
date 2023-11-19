// ----------------------------------------------
// TCSS 460: Autumn 2023
// Backend REST Service Module
// ----------------------------------------------
// Express is a Node.js web application framework
// that provides a wide range of APIs and methods
// Express API Reference:
// https://expressjs.com/en/resources/middleware/cors.html

// ----------------------------------------------
// retrieve necessary files (express and cors)
const express = require("express")
const cors = require("cors")
// retrieve the MySQL DB Configuration Module
const dbConnection = require("./config")
// use this library for parsing HTTP body requests
var bodyParser = require('body-parser');

// ----------------------------------------------
// (A)  Create an express application instance
//      and parses incoming requests with JSON
//      payloads
// ----------------------------------------------
var app = express(express.json); 

// ----------------------------------------------
// (B)  Use the epxress cors middleware
//      Cross-origin resource sharing (CORS)
//      is a technique that restricts specified
//      resources within web page to be accessed
//      from other domains on which the origin
//      resource was initiated the HTTP request
//      Also use the bodyParser to parse in 
//      format the body of HTTP Requests
// ----------------------------------------------
app.use(cors());
app.use(bodyParser.json());

// ----------------------------------------------
// Ref: https://expressjs.com/en/4x/api.html#app
// (C)  Create a server such that it binds and
//      listens on a specified host and port.
//      We will use default host and port 3000.
app.listen(3000, () => {
    console.log("Express server is running and listening");
}); 

// ---------------------------------------------- 
// (1) Retrieve all records in people table
// root URI: http://localhost:port/
app.get('/', (request, response) => {
    const sqlQuery = "SELECT * FROM people;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('SQLQuery', sqlQuery); // Send a custom header attribute.
        return response.status(200).json(result);
    });
});

// ---------------------------------------------- 
// (2) Retrieve one record by id
// city URI: http://localhost:port/id 
app.get('/:id', (request, response) => {
    const id = request.params.id;
    const sqlQuery = "SELECT * FROM people WHERE ID = '" + id + "';";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('ID', id); // Send a custom.
        return response.status(200).json(result);
    });
});

// ---------------------------------------------- 
// (3) insert a new record by name 
// city URI: http://localhost:port/name 
app.post('/:name', (request, response) => {
    const sqlQuery = 'INSERT INTO PEOPLE VALUES (?);';
    const values = [request.body.name, request.body.id, request.body.weight,
        request.body.living, request.body.religion, request.body.sex];
    dbConnection.query(sqlQuery, [values], (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Failed: Record was not added."});
        }
        return response.status(200).json({success: "Successful: Record was added!"});
    });
});

 
// ---------------------------------------------- 
// (4) update an existing record by id 
// id URI: http://localhost:port/id 
app.put('/:id', (request, response) => {
    const id = request.params.id;
    const sqlQuery = `UPDATE PEOPLE SET name = ?, id = ?,
    weight = ?, living = ?, religion = ?, sex = ?
    WHERE NAME = ? ;`;
    const values = [request.body.name, request.body.id, request.body.weight,
        request.body.living, request.body.religion, request.body.sex];
        console.log(sqlQuery);
        dbConnection.query(sqlQuery, [...values, id], (err, result) => {
            if (err) {
                return response.status(400).json({Error: "Failed: Record was not added."});
            }
            return response.status(200).json({Success: "Successful: Record was updated!"});
        });
});

// ----------------------------------------------
// (5) Delete a record by ID
// city URI: http://localhost:port/name/id
app.delete('/:id', (request, response) => {
    const id = request.params.id;
    const sqlQuery = "DELETE FROM people WHERE id = ? ; ";
    dbConnection.query(sqlQuery, id, (err, result) => {
        if (err) {
            return response.status(400).json({ ERROR: "Failed: Record was not deleted." });
        }
        return response.status(200).json({ Success: "Successful: Record was deleted!" });
    });
});

// ---------------------------------------------- 
// (1) Retrieve all records in people table
// root URI: http://localhost:port/
app.get('/:id/:name', (request, response) => {
    const name = request.params.name;
    const id = request.params.id;
    const sqlQuery = "SELECT * FROM people WHERE id = '" + id + "' AND name = '" + name + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('Name', name); // Send a custom.
        return response.status(200).json(result);
    });
});

// ---------------------------------------------- 
// (1) Get person with id name and job
// root URI: http://localhost:port/
app.get('/:id/:name/:job', (request, response) => {
    const name = request.params.name;
    const id = request.params.id;
    const job = request.params.job;
    const sqlQuery = "SELECT * FROM people WHERE id = '" + id 
    + "' AND name = '" + name + "' AND job = '" + job + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('job', job); // Send a custom.
        return response.status(200).json(result);
    });
});

// ---------------------------------------------- 
// (1) Get person with id name and job
// root URI: http://localhost:port/
app.get('/id/:name/:job', (request, response) => {
    const name = request.params.name;
    const job = request.params.job;
    const sqlQuery = "SELECT * FROM people WHERE name = '" + name + "' AND job = '" + job + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('job', job); // Send a custom.
        return response.status(200).json(result);
    });
});

// Include functions to get multiple John Doe names by name, also getting all  of the same job or same job and name