const { Router } = require('express');
const controller = require('../controller/usersController')

const router = Router();


router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.post('/', controller.postUsers); 
router.delete('/:id', controller.deleteUserById);
router.put('/:id', controller.updateUserById);



module.exports = router;
