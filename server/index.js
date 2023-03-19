const express = require('express');
const cors = require('cors')

// require the environmental config
require('dotenv').config();

// Set Port
const port = process.env.PORT || 5000;

// bring in GraphQL
const {graphqlHTTP} = require('express-graphql');

// Bring in db
const connectDB = require('./config/db');

// initialize app variable express
const app = express();

// Connect to db
connectDB();

app.listen(port, console.log(`Server running on port ${port}`));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' // true if NODE_ENV === 'development' mode
}))

