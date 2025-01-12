const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const isAuthenticated = require('../middleware/middleware');
const upload = require('../middleware/multerConfig');


router.post('/create',isAuthenticated,upload.single('image'),  userController.createUser);
router.post('/list',isAuthenticated,  userController.getUsers);
router.delete('/delete/:id',isAuthenticated,  userController.deleteUser);
router.put('/update/:id',isAuthenticated, upload.single('image'),  userController.updateUser);
router.get('/get/:id',isAuthenticated,  userController.getUserById);


module.exports = router;