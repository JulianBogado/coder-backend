const express = require('express');
const PORT = process.env.PORT || 5050;
const apiRouters = require('./routers/app.routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouters);
app.use(express.static('public'));

const connectedServer = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

connectedServer.on('error', (error) => {
    console.log(`Error: ${error}`);
});

