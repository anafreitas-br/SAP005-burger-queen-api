const dbProducts = require('../db/models')

class ProductsController {
  static async getProducts(_, res) {
    try {
      const products = await dbProducts.Products.findAll();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ error: 'Product not found' });
    }

  }

  static async getProductsById(req, res) {
    const { id } = req.params;
    try {
      const productsId = await dbProducts.Products.findAll({
        where: {
          id: Number(id),
        }
      });
      return res.status(200).json(productsId);
    } catch (error) {
      return res.status(400).json({ error: "Products not found" });
    }
  }

  static async postProducts(req, res) {
    const newProducts = req.body
    const products = await dbProducts.Products.create(newProducts);
    return res.status(200).json(products);
  }

  static async updateProductsById(req, res) {
    const upProducts = req.body
    const { id } = req.params
    const products = await dbProducts.Products.update(upProducts, {
      where: {
        id: Number(id)
      }
    });

    return res.status(200).json("Item update sucess");
  }

  static async deleteProductsById(req, res) {
    try {
      const deleteProducts = await dbProducts.Products.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json("item successfully deleted");
    } catch (error) {
      return res.status(400).json("Error deleting item");
    }
  }
}


module.exports = ProductsController

