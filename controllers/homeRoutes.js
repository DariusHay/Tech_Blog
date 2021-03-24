const router = require('express').Router();
const { Blogs, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blogs.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ],
        })
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('hompage', { blogs });
    } catch (err) {
        res.status(500).json(err);
    }
})