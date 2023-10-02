const {Blog} = require('../module/blogModule')


exports.RenderCreateBlog = (req,res)=>{
    res.render('createBlog.ejs')
}

