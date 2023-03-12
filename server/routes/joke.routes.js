const RenameController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/joke', RenameController.findAll);

    app.get('/api/joke/:id', RenameController.findOne);

    app.post('/api/joke', RenameController.createOne);

    // * changes all values in the database to match the request body
    // app.put('/api/joke/:id', RenameController.updateOne);

    // * changes only the values in the request body
    app.patch('/api/joke/:id', RenameController.updateOne);

    app.delete('/api/joke/:id', RenameController.deleteOne);
};