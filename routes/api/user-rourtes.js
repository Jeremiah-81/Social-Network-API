// Here we will use router to get the data we are requesting.
const router = require("express").Router();

const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/users-controller");

router.route("/").get(getAllUsers).post(createUsers);

router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);

router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

// This will tell node.js which bits of code to export from a given file so the other files are allowed access to the exported code.
module.exports = router;
