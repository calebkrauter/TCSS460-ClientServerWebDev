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
// (1) Retrieve all cpus in cpus table that share the same brand and price. (User searches cpu filtered by brand and price -> consumer)
// root URI: http://localhost:port/ 
app.get('/:cpuBrand/:price', (request, response) => {
    const cpuBrand = request.params.cpuBrand;
    const price = request.params.price;
    const sqlQuery = "SELECT * FROM cpus WHERE price = '" + price + "' AND cpuBrand = '" + cpuBrand + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('cpuBrand', cpuBrand); // Send a custom.
        return response.status(200).json(result);
    });
});
// ---------------------------------------------- 
// (2) Retrieve all cpus in cpus table that share the same brand, price, and core count.(User searches cpu filtered by brand and price and core count -> consumer)
// root URI: http://localhost:port/
app.get('/:cpuBrand/:price/:coreCount', (request, response) => {
    const cpuBrand = request.params.cpuBrand;
    const price = request.params.price;
    const coreCount = request.params.coreCount;
    const sqlQuery = "SELECT * FROM cpus WHERE price = '" + price 
    + "' AND cpuBrand = '" + cpuBrand + "' AND coreCount = '" + coreCount + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('coreCount', coreCount); // Send a custom.
        return response.status(200).json(result);
    });
});
// ---------------------------------------------- 
// (3) Retrieve all data on cpu a specific cpu brand. (User to search by serial number to review listing.)
// root URI: http://localhost:port/serialNumber
app.get('/:cpuBrand/:price/:coreCount/:serialNumber', (request, response) => {
    const sqlQuery = "SELECT * FROM cpus WHERE serialNumber = " + request.params.serialNumber + " ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('SQLQuery', sqlQuery); // Send a custom header attribute.
        return response.status(200).json(result);
    });
});



// ---------------------------------------------- 
// (4) Insert a new cpu by serial number (User uploads cpu to sell by serial number to help ensure that the unique serial number is listed acurately -> consumer)
// root URI: http://localhost:port/ 
app.post('/:serialNumber', (request, response) => {
    const sqlQuery = 'INSERT INTO cpus VALUES (?);';
    const values = [request.body.cpuBrand, request.body.price, request.body.coreCount,
        request.body.serialNumber, request.body.speed, request.body.socketType, request.body.condition];
    dbConnection.query(sqlQuery, [values], (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Failed: Record was not added."});
        }
        return response.status(200).json({success: "Successful: Record was added!"});
    });
});

// ---------------------------------------------- 
// (5) update an existing cpu by serialNumber (User updates listing by brand, price, corecount and serial number to verify what listing is being updated.)
// root URI: http://localhost:port/ 
app.put('/:cpuBrand/:price/:coreCount/:serialNumber', (request, response) => {
    const serialNumber = request.params.serialNumber;
    const sqlQuery = `UPDATE cpus SET cpuBrand = ?, price = ?,
    coreCount = ?, serialNumber = ?, speed = ?, socketType = ?, \`condition\` = ?
    WHERE serialNumber = ? ;`;
    const values = [request.body.cpuBrand, request.body.price, request.body.coreCount,
        request.body.serialNumber, request.body.speed, request.body.socketType, request.body.condition];
        console.log(sqlQuery);
        dbConnection.query(sqlQuery, [...values, serialNumber], (err, result) => {
            if (err) {
                return response.status(400).json({Error: "Failed: Record was not added."});
            }
            return response.status(200).json({Success: "Successful: Record was updated!"});
        });
});

// ----------------------------------------------
// (6) Delete a cpu by serial number (User deletes listing by serial number -> consumer)
// root URI: http://localhost:port/
app.delete('/:cpuBrand/:price/:coreCount/:serialNumber', (request, response) => {
    const serialNumber = request.params.serialNumber;
    const sqlQuery = "DELETE FROM cpus WHERE serialNumber = ? ; ";
    dbConnection.query(sqlQuery, serialNumber, (err, result) => {
        if (err) {
            return response.status(400).json({ ERROR: "Failed: Record was not deleted." });
        }
        return response.status(200).json({ Success: "Successful: Record was deleted!" });
    });
});


// WEB SERVICE TWO ----------------------------------------------------------------------------



// ---------------------------------------------- 
// (1) Retrieve all data on cpus. (Admin may view all cpus avaliable without filter by price or other.)
// root URI: http://localhost:port/
app.get('/', (request, response) => {
    const sqlQuery = "SELECT * FROM cpus;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('SQLQuery', sqlQuery); // Send a custom header attribute.
        return response.status(200).json(result);
    });
});
// ---------------------------------------------- 
// (2) Retrieve all cpus in cpus table that share the same brand. (Admin may want to view all cpus by brand.)
// root URI: http://localhost:port/
app.get('/:cpuBrand', (request, response) => {
    const cpuBrand = request.params.cpuBrand;
    const price = request.params.price;
    const sqlQuery = "SELECT * FROM cpus WHERE price = '" + price + "' AND cpuBrand = '" + cpuBrand + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('cpuBrand', cpuBrand); // Send a custom.
        return response.status(200).json(result);
    });
});
// ---------------------------------------------- 
// (3) Retrieve cpus based on serial number. (In case Admin needs to check that there are no errors in having duplicated serial numbers not brand restricted.)
// root URI: http://localhost:port/
app.get('/:serialNumber', (request, response) => {
    const cpuBrand = request.params.cpuBrand;
    const price = request.params.price;
    const coreCount = request.params.coreCount;
    const sqlQuery = "SELECT * FROM cpus WHERE price = '" + price 
    + "' AND cpuBrand = '" + cpuBrand + "' AND coreCount = '" + coreCount + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('coreCount', coreCount); // Send a custom.
        return response.status(200).json(result);
    });
});
// ---------------------------------------------- 
// (4) Retrieve cpus by brand and serial number. (In case Admin needs to check that there are no errors in having duplicated serial numbers for a specific brand.)
// root URI: http://localhost:port/
app.get('/:cpuBrand/:serialNumber', (request, response) => {
    const cpuBrand = request.params.cpuBrand;
    const price = request.params.price;
    const coreCount = request.params.coreCount;
    const sqlQuery = "SELECT * FROM cpus WHERE price = '" + price 
    + "' AND cpuBrand = '" + cpuBrand + "' AND coreCount = '" + coreCount + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('coreCount', coreCount); // Send a custom.
        return response.status(200).json(result);
    });
});

// ---------------------------------------------- 
// (5) insert cpu using body with no specification necessary (Admin can input listings without specification to make easy additions to etail site.)
// root URI: http://localhost:port/ 
app.post('/', (request, response) => {
    const sqlQuery = 'INSERT INTO cpus VALUES (?);';
    const values = [request.body.cpuBrand, request.body.price, request.body.coreCount,
        request.body.serialNumber, request.body.speed, request.body.socketType, request.body.condition];
    dbConnection.query(sqlQuery, [values], (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Failed: Record was not added."});
        }
        return response.status(200).json({success: "Successful: Record was added!"});
    });
});

// ---------------------------------------------- 
// (6) update an existing cpu by serialNumber (Admin only needs serial number to confirm the listing because Admin has trusted role.)
// root URI: http://localhost:port/ 
app.put('/:serialNumber/', (request, response) => {
    const serialNumber = request.params.serialNumber;
    const sqlQuery = `UPDATE cpus SET cpuBrand = ?, price = ?,
    coreCount = ?, serialNumber = ?, speed = ?, socketType = ?, \`condition\` = ?
    WHERE serialNumber = ? ;`;
    const values = [request.body.cpuBrand, request.body.price, request.body.coreCount,
        request.body.serialNumber, request.body.speed, request.body.socketType, request.body.condition];
        console.log(sqlQuery);
        dbConnection.query(sqlQuery, [...values, serialNumber], (err, result) => {
            if (err) {
                return response.status(400).json({Error: "Failed: Record was not added."});
            }
            return response.status(200).json({Success: "Successful: Record was updated!"});
        });
});

// ----------------------------------------------
// (7) Delete a cpu by serial number (Admin only needs serial number to confirm the listing)
// root URI: http://localhost:port/
app.delete('/:serialNumber', (request, response) => {
    const serialNumber = request.params.serialNumber;
    const sqlQuery = "DELETE FROM cpus WHERE serialNumber = ? ; ";
    dbConnection.query(sqlQuery, serialNumber, (err, result) => {
        if (err) {
            return response.status(400).json({ ERROR: "Failed: Record was not deleted." });
        }
        return response.status(200).json({ Success: "Successful: Record was deleted!" });
    });
});
