const getUsers = (req, res) => {
    res.send("acessando usuários");
  }

  const getUsersId = (req, res) => { 
    res.send("acessando usuários por id");
  }

  const postUsers = (req, res) => { 
    res.send("Criando usuários");
  }

  const putUsersId = (req, res) => { 
    res.send("Editando usuários por id");
  }

  const deleteUsersId = (req, res) => { 
    res.send("Excluindo usuários por id");
  }

  module.exports = { getUsers, getUsersId, postUsers, putUsersId, deleteUsersId }