const router = require('express').Router();
const { Blogs } = require('../../models');
const { Comments } = require('../../models');
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Comments.create({
            ...req.body,
            user_id: req.session.user_id,
            include:
                [{
                    model: User,
                    where: {
                        id: req.session.user_id,
                    }
                },
                {
                    model: Blogs,
                    where: {
                        user_id: req.session.user_id,
                    }
                }]

        });
        console.log(newBlog)

        // res.render('blogs', {
        //     newBlog,
        // });
    } catch (err) {
        //res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
