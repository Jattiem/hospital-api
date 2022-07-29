// Importing modules
const express = require('express');
const path = require('path');
const call = require('./call');
const cors = require('cors');
const bodyParser = require('body-parser');
// Create an express app
const app = express();
// Create a router
const router = express.Router();
// Port
const port = parseInt(process.env.port) || 4000;

// express.json(): It a middleware
app.use(router,cors(), express.json(), express.urlencoded({
    extended: true
}));

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});


// Fetch data
router.get('^/$|/clinic', (req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    // Query
    const strQry = `
    SELECT d.id, CONCAT(d.firstname, ' ', d.lastname) 'Doctor Fullname', d.dentistAge, 
    d.contactNumb, d.practiceNumb, CONCAT(p.firstname, ' ', p.lastname) 'Patient Fullname', 
    p.paymentMethods, p.medicalAid
    FROM dentists d
    INNER JOIN patients p
    ON d.id = p.dentistid;
    `;
    db.query(strQry, (err, data)=> {
           if(err) throw err;
           // res.send(data);
           res.json({
               status: 200,
               data: data
           });
       });
});