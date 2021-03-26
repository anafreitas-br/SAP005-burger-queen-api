const dbProducts = require('../db/models')

class ProductsController {
  static async getProducts(req, res) {
    const products = await dbProducts.Products.findAll()
    return res.status(200).json(products);
  }

  static async getProductsById(req, res) {
    const { id } = await req.params
    const products = await dbProducts.Products.findAll({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(products)

  }
  static async postProducts(req, res) {
    const newProducts = await req.body
    const products = await dbProducts.Products.create(newProducts);
    return res.status(200).json(products);
  }

  static async updateProductsById(req, res) {
      const upProducts = await req.body
      const { id } = await req.params
      const products = await dbProducts.Products.update(upProducts, {
       Where: {
          id: Number(id)
        }
       });

      return res.status(200).json(products);
  } 
 
  static async deleteProductsById(req, res) {
    const { id } = await req.params
    const products = await dbProducts.Products.destroy({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(products)
  }

}

module.exports = ProductsController

