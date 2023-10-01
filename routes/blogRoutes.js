const { CreateBlog } = require("../controller/blogController");

const router = require('express').Router();

router.route('/createBlog').get(CreateBlog)


module.exports = router;