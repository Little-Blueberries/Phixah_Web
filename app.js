// app.js
// Main entry point for the Express application. Sets up middleware, routes, and starts the server.

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use main router
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
