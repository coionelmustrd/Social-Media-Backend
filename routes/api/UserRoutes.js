const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
} = require('../../controllers/UserController.js');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:userId').post(createUser).put(updateUser)
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteUser);
module.exports = router;