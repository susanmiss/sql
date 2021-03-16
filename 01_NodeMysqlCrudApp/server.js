const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("Hello World");
});
const employeeRoutes = require('./src/routes/employee.routes')
app.use('/api/v1/employees', employeeRoutes)


// Setup server port
const port = process.env.PORT || 5000;
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


