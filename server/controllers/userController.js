class UserController {
  async registration(req, res) {

  }

  async login(req, res) {
    
  }

  async isAuth(req, res) {
    const query = req.query;
    res.json(query);
  }
}

module.exports = new UserController();
