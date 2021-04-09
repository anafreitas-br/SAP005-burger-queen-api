const dbOrders = require('../db/models')

class OrdersController {
  static async getOrders(_, res) {
    try {
      const orders = await dbOrders.Orders.findAll({
        include: [{
          model: dbOrders.Products,
          as: 'products',
          required: false,
          attributes: ['name', 'price', 'flavor', 'complement'],
          through: {
            model: dbOrders.ProductOrders,
            as: 'order list',
            attributes: ['product_id', 'qtd'],
          },
        }],
      });
      return res.status(200).json(orders)
    } catch (error) {
      return res.status(401).json({
        code:'401',
        message:'User not authenticated'
      });
    }
  }

  static async getOrdersById(req, res) {
    const { id } = req.params
    const orders = await dbOrders.Orders.findAll({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(orders)
  }

  static async postOrders(req, res) {
    const newOrders = req.body
    const orders = await dbOrders.Orders.create(newOrders);
    return res.status(200).json(orders);
  }

  static async updateOrdersById(req, res) {
    const upOrders = req.body
    const { id } = req.params
    const products = await dbOrders.Orders.update(upOrders, {
      where: {
        id: Number(id)
      }
    });

    return res.status(200).json("Order update sucess");
  }

  static async deleteOrdersById(req, res) {
    const { id } = req.params
    const orders = await dbOrders.Orders.destroy({
      where: {
        id: Number(id)
      }
    })
    return res.status(201).json("Order successfully deleted")
  }

}

//teste

module.exports = OrdersController