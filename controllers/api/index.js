const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./comments')

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;