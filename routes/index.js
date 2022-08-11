//  Here we will use router to get the data we are requesting.
const router = require('express').Router();

const apiRoutes = require('./api');


router.use('/api', apiRoutes);

//  Here we are requesting it to show an error message.
router.use((req, res) => {
    res.status(404).send('<h1>404 Error....</h1>');
  });

// This will tell node.js which bits of code to export from a given file so the other files are allowed access to the exported code.
module.exports = router;