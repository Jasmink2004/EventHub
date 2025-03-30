const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/', userController.createUser);
router.post('/bulk', userController.createManyUsers);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
