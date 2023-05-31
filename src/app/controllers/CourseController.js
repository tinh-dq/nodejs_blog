const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course);
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch((err) => console.error(err));
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new CourseController();
