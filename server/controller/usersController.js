const dbUsers = require('../db/models')

class UsersController {
  static async getUsers(req, res) {
    const users = await dbUsers.User.findAll()
    return res.status(200).json(users);
  }

  static async getUserById(req, res) {
    const { id } = await req.params
    const users = await dbUsers.User.findAll({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(users)

  }
  static async postUsers(req, res) {
    const newUsers = await req.body
    const users = await dbUsers.User.create(newUsers);
    return res.status(200).json(users);
  }

  static async updateUserById(req, res) {
      const updateUsers = await req.params.id
      // const { id } = await req.params
      const users = await dbUsers.User.update({User: updateUsers}, {
       Where: {
          id: Number(id)
        }
       });

      return res.status(200).json(users);
  } 
 
  static async deleteUserById(req, res) {
    const { id } = await req.params
    const users = await dbUsers.User.destroy({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(users)
  }

}

module.exports = UsersController
