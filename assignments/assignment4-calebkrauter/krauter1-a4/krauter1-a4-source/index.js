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
// (1) Retrieve all cpus in cpus table that share the same brand and price. 
//      (User searches cpu filtered by brand and price -> consumer)
// root URI: http://localhost:port/ 
app.get('/:cpuBrand/:price', (request, response) => { // GET request.
    const cpuBrand = request.params.cpuBrand; // Get from the parameters of the URI the cpu brand.
    const price = request.params.price; // Get from the parameters of the URI the price.
    // Query the table for price and cpu brand.
    const sqlQuery = "SELECT * FROM cpus WHERE price = '" + price + "' AND cpuBrand = '" + cpuBrand + "' ;";
    dbConnection.query(sqlQuery, (err, result) => { // Check that the result is valid or allowed.
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('cpuBrand', cpuBrand); // Send a custom header.
        return response.status(200).json(result); // Return the result.
    });
});
// ---------------------------------------------- 
// (2) Retrieve all cpus in cpus table that share the same brand, price, 
//      and core count.(User searches cpu filtered by brand and price and core count -> consumer)
// root URI: http://localhost:port/
app.get('/:cpuBrand/:price/:coreCount', (request, response) => { // GET request.
    const cpuBrand = request.params.cpuBrand; // Get from the parameters of the URI the cpu brand.
    const price = request.params.price; // Get from the parameters of the URI the price.
    const coreCount = request.params.coreCount; // Get from the parameters of the URI the core count.
        // Query the table for price and cpu brand and core count.
    const sqlQuery = "SELECT * FROM cpus WHERE price = '" + price 
    + "' AND cpuBrand = '" + cpuBrand + "' AND coreCount = '" + coreCount + "' ;";
    dbConnection.query(sqlQuery, (err, result) => { // Check that the result is valid or allowed.
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('coreCount', coreCount); // Send a custom header.
        return response.status(200).json(result); // Return the result.
    });
});
// ---------------------------------------------- 
// (3) Retrieve all data on cpu a specific cpu. (User to search by serial number to review their specific listing.)
// root URI: http://localhost:port/serialNumber
app.get('/:cpuBrand/:price/:coreCount/:serialNumber', (request, response) => { // GET request, must include all parameters.
    // Query the table for serialNumber.
    const sqlQuery = "SELECT * FROM cpus WHERE serialNumber = " 
    + request.params.serialNumber + " ;";
    dbConnection.query(sqlQuery, (err, result) => { // Check that the result is valid or allowed.
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('SQLQuery', sqlQuery); // Send a custom header.
        return response.status(200).json(result); // Return the result.
    });
});



// ---------------------------------------------- 
// (4) Insert a new cpu by serial number (User uploads cpu to sell by serial number to help 
//      ensure that the unique serial number is listed acurately -> consumer.)
// root URI: http://localhost:port/ 
app.post('/:serialNumber', (request, response) => { // POST request.
    // Query the table for serialNumber.
    const sqlQuery = 'INSERT INTO cpus VALUES (?);';
    // Get all values from  the JSON body.
    const values = [request.body.cpuBrand, request.body.price, request.body.coreCount,
        request.body.serialNumber, request.body.speed, request.body.socketType, request.body.condition];
        // Check the query, and JSON body for error and provide result if possible.
    dbConnection.query(sqlQuery, [values], (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Failed: Record was not added."});
        }
        return response.status(200).json({success: "Successful: Record was added!"});
    });
});

// ---------------------------------------------- 
// (5) update an existing cpu by serialNumber (User updates listing by brand, price, 
//      core count and serial number to verify what listing is being updated.)
// root URI: http://localhost:port/ 
//
// PUT request and the URI requires brand, price, core count and serial number.
app.put('/:cpuBrand/:price/:coreCount/:serialNumber', (request, response) => {
    const serialNumber = request.params.serialNumber; // Get serial number from input in URI's parameter.
    // Update all info in record if the serial number has a coresponding record. 'Condition' needs to be escaped
    //      because it is a key word.
    const sqlQuery = `UPDATE cpus SET cpuBrand = ?, price = ?,
    coreCount = ?, serialNumber = ?, speed = ?, socketType = ?, \`condition\` = ?
    WHERE serialNumber = ? ;`;
    // Get all the values from the JSON body to input data into the new record.
    const values = [request.body.cpuBrand, request.body.price, request.body.coreCount,
        request.body.serialNumber, request.body.speed, request.body.socketType, request.body.condition];
    // Query for the data and check that the new data and serial number have no error and if possible respond successfully. 
    dbConnection.query(sqlQuery, [...values, serialNumber], (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Failed: Record was not added."});
        }
        return response.status(200).json({Success: "Successful: Record was updated!"});
    });
});

// ----------------------------------------------
// (6) Delete a cpu by serial number (User deletes listing by serial number -> consumer.)
// root URI: http://localhost:port/
//
// DELETE request is dependent upon the cpu brand, price, core count and serial number parameters.
app.delete('/:cpuBrand/:price/:coreCount/:serialNumber', (request, response) => {
    const serialNumber = request.params.serialNumber; // Get the serial number from the URI's parameter.
    const sqlQuery = "DELETE FROM cpus WHERE serialNumber = ? ; "; // Query for the serial number to remove.
    // Check that data is not errant.
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
app.get('/', (request, response) => { // GET request, no parameters necessary here.
    const sqlQuery = "SELECT * FROM cpus;"; // The query from cpus table.
    // Check the data for errors.
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
app.get('/:cpuBrand', (request, response) => { // GET request, must include all parameters.
    const cpuBrand = request.params.cpuBrand; // Get form the URI's parameters the brand.
    // Query the table for the price and brand and check their values compared ot the URI parameters.
    const sqlQuery = "SELECT * FROM cpus WHERE cpuBrand = '" + cpuBrand + "' ;";
    // Check for errors.
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('cpuBrand', cpuBrand); // Send a custom header.
        return response.status(200).json(result);
    });
});
// ---------------------------------------------- 
// (3) Retrieve cpus based on serial number. (In case Admin needs to check that there are no errors in having duplicated serial numbers and this is non-brand restricted)
// root URI: http://localhost:port/cpuBrand/price/coreCount/
//
// GET all cpus with the serial number parameter in the URI with unspecified brand, price and core count.
app.get('/cpuBrand/price/coreCount/:serialNumber', (request, response) => {
    const serialNumber = request.params.serialNumber; // The serial number from the URI parameter.
    // The query to check if the parameter is in the table.
    const sqlQuery = "SELECT * FROM cpus WHERE serialNumber = '" + serialNumber + "' ;";
    dbConnection.query(sqlQuery, (err, result) => { // Check if data is errant.
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('serialNumber', serialNumber); // Send a custom header.
        return response.status(200).json(result);
    });
});
// ---------------------------------------------- 
// (4) Retrieve cpus by brand and serial number. 
//      (In case Admin needs to check that there are no errors in having duplicated serial numbers for a specific brand.)
// root URI: http://localhost:port/
app.get('/:cpuBrand/price/coreCount/:serialNumber', (request, response) => { // GET using the parameters in the URI as a necessity to obtain result.
    const cpuBrand = request.params.cpuBrand; // 
    const serialNumber = request.params.serialNumber;

    const sqlQuery = "SELECT * FROM cpus WHERE cpuBrand = '" + cpuBrand + "' AND serialNumber = '" + serialNumber + "' ;";
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('cpuBrand', cpuBrand); // Send a custom.
        return response.status(200).json(result);
    });
});

// ---------------------------------------------- 
// (5) Insert cpu using body with no specification necessary (Admin can input listings without specification to make easy additions to etail site.)
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
// (6) Update an existing cpu by serialNumber (Admin only needs serial number to confirm the listing because Admin has trusted role.)
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
