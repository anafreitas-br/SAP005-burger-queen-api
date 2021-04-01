const dbUsers = require('../db/models')

class UsersController {
  static async getUsers(req, res) {
    const users = await dbUsers.Users.findAll()
    return res.status(200).json(users);
  }

  static async getUserById(req, res) {
    const { id } = req.params
    const users = await dbUsers.Users.findAll({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(users)

  }
  static async postUsers(req, res) {
    const newUsers = req.body
    const users = await dbUsers.Users.create(newUsers);
    return res.status(200).json(users);
  }

  static async updateUserById(req, res) {
    const updateUsers = req.body
    const { id } = req.params
    const users = dbUsers.Users.update(updateUsers, {
      where: {
        id: Number(id)
      }
    });

    return res.status(200).json('usuário atualizado');
  }

  static async deleteUserById(req, res) {
    const { id } = req.params
    const users = await dbUsers.Users.destroy({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json('usuário deletado')
  }

}

//teste
module.exports = UsersController
