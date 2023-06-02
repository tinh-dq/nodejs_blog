const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');
// create new course
router.get('/create', courseController.create);
// save new course
router.post('/store', courseController.store);
// show course info
router.get('/:slug', courseController.show);
// edit course
router.get('/:id/edit', courseController.edit);
// update course
router.put('/:id', courseController.update);
// delete course
router.delete('/:id', courseController.destroy);

module.exports = router;
