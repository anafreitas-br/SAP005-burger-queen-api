const getOrders = (req, res) => {
    res.send("acessando pedidos");
  }
  const getOrdersId = (req, res) => { 
    res.send("acessando pedidos por id");
  }
  const postOrders = (req, res) => { 
    res.send("Criando pedidos");
  }
  const putOrdersId = (req, res) => { 
    res.send("Editando pedidos por id");
  }
  const deleteOrdersId = (req, res) => { 
    res.send("Excluindo pedidos por id");
  }

  module.exports = { getOrders, getOrdersId, postOrders, putOrdersId, deleteOrdersId }