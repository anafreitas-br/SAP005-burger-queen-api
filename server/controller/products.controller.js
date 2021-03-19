const getProducts = (req, res) => {
    res.send("acessando produtos");
  }
  const getProductsId = (req, res) => { 
    res.send("acessando produtos por id");
  }
  const postProducts = (req, res) => { 
    res.send("Criando produtos");
  }
  const putProductsId = (req, res) => { 
    res.send("Editando produtos por id");
  }
  const deleteProductsId = (req, res) => { 
    res.send("Excluindo produtos por id");
  }

  module.exports = { getProducts, getProductsId, postProducts, putProductsId, deleteProductsId }
