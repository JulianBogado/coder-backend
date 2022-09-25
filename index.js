const express = require('express');
const PORT = process.env.PORT || 8080;
const apiRouters = require('./routers/app.routers');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouters);
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');


const connectedServer = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

connectedServer.on('error', (error) => {
    console.log(`Error: ${error}`);
});

