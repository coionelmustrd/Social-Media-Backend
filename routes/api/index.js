const router = require('express').Router();
const userRoutes = require('./UserRoutes.js');
const thoughtRoutes = require('./ThoughtRoutes.js');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;