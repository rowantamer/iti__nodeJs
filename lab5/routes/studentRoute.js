const express = require('express');
const router = express.Router();
const stdsController = require('../controller/studentController');


router.get('/' , stdsController.getAllStds)

router.get('/:id' , stdsController.getById )

router.put('/:id' , stdsController.update )

router.post('/create' , stdsController.createOne)

router.delete('/:id' , stdsController.deleteId)


module.exports = router ;