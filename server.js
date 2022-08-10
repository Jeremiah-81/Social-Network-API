// This will be the framework we will be using in our code.
const express = require('express');
const mongoose = require('mongoose');


// This is where we will use express and what port we will be using.
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes'));

// This will make the connection to the mongoose framework.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// This will log the queries we get from mongoose.
mongoose.set('debug', true);

app.listen(PORT, () => console.log(` ************** Connected on localhost:${PORT} ************* `));