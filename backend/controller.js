const User = require('./model'); // Use a single import for the User model

const getUsers = (req, res, next) => {
  User.find() // Use the model directly
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ error });
    });
};

const addUser = (req, res, next) => {
  const newUser = new User({ // Rename variable to avoid conflict
    id: req.body.id,
    name: req.body.name,
  });
  
  newUser.save() // Save the new instance of User
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ error });
    });
};

const updateUser = (req, res, next) => {
  const { id, name } = req.body;
  User.updateOne({ id: id }, { $set: { name: name } })
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ error });
    });
};

const deleteUser = (req, res, next) => {
  const id = req.body.id;
  User.deleteOne({ id: id })
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ error });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;