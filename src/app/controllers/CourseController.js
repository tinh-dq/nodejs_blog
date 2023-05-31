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
    create(req, res, next) {
        res.render('courses/create');
    }
    store(req, res, next) {
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save();
        res.send('course created successfully');
    }
}

module.exports = new CourseController();
