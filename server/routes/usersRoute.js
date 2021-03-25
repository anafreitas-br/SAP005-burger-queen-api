const { Router } = require('express');
const Usercontroller = require('../controller/usersController')

const router = Router();


router.get('/', Usercontroller.getUsers);
router.get('/:id', Usercontroller.getUserById);
router.post('/', Usercontroller.postUsers); 
router.delete('/:id', Usercontroller.deleteUserById);
router.put('/:id', Usercontroller.updateUserById);



module.exports = router;
