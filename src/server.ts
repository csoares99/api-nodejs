// const express = require('express');
// const bodyParser = require('body-parser');

import { app } from "./app";

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// require('./controllers/planController')(app);

// app.listen(3000, () => console.log('server running'));
app.listen(process.env.PORT || 3000);