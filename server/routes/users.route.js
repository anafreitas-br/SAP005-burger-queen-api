const { Router } = require('express');
const controller = require('../controller/users.controller')

const router = Router();


router.get('/', controller.getUsers);
router.get('/:uid', controller.getUsersId);
router.post('/', controller.postUsers);
router.put('/:uid', controller.putUsersId);
router.delete('/:uid', controller.deleteUsersId);



module.exports = router;

