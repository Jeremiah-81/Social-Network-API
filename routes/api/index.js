// Here we will use router to get the data we are requesting.
const router = require("express").Router();

const usersRoutes = require("./user-routes");

const thoughtsRoutes = require("./thought-routes");

router.use("/users", usersRoutes);

router.use("/thoughts", thoughtsRoutes);

// This will tell node.js which bits of code to export from a given file so the other files are allowed access to the exported code.
module.exports = router;
