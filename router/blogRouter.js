const { RenderCreateBlog, PostCreateBlog } = require('../controller/blogController');

const router = require('express').Router();

router.route('/createBlog').get(RenderCreateBlog)


module.exports = router