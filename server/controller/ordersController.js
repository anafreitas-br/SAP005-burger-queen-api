const dbOrders = require('../db/models')

class OrdersController {
  static async getOrders(req, res) {
    const orders = await dbOrders.Orders.findAll()
    return res.status(200).json(orders);
  }

  static async getOrdersById(req, res) {
    const { id } = await req.params
    const orders = await dbOrders.Orders.findAll({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(orders)

  }
  static async postOrders(req, res) {
    const newOrders = await req.body
    const orders = await dbOrders.Orders.create(newOrders);
    return res.status(200).json(orders);
  }

  static async updateOrdersById(req, res) {
      const upOrders = await req.body
      const { id } = await req.params
      const orders = await dbOrders.Orders.update(upOrders, {
       Where: {
          id: Number(id)
        }
       });

      return res.status(200).json(orders);
  } 
 
  static async deleteOrdersById(req, res) {
    const { id } = await req.params
    const orders = await dbOrders.Orders.destroy({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(orders)
  }

}

module.exports = OrdersController
