var express = require('express');
var router = express.Router();

const controller = require('../controllers/restaurants');

router.get('/', controller.list);

router.get('/statistics', controller.endpoint);

router.get('/:id', controller.index);

router.post('/', controller.create);

router.put('/:id', controller.replace);

router.patch('/:id', controller.edit);

router.delete('/:id', controller.destroy);

module.exports = router;
