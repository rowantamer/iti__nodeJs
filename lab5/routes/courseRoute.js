const express = require('express')
const router = express.Router();
const courseController = require('../controller/coursesController')

router.get('/' , courseController.getAll)
router.get('/:id' , courseController.getById)
router.post('/create' , courseController.createOne)
router.put('/:id' , courseController.updateOneById)
router.delete('/:id' , courseController.deleteById)

module.exports = router ;