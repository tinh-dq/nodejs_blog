const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    storedCourses(req, res) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored_courses', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((err) => console.error(err));
    }
}

module.exports = new MeController();
