const Controllers = require('../controllers/controllers');

module.exports = (app) => {
    app.get('/authors', (req, res) => {
        Controllers.all(req, res);
    });

    app.get('/author/:id', (req, res) => {
        Controllers.getOne(req, res);
    });

    app.post('/author', (req, res) => {
        Controllers.create(req, res);
    });

    app.put('/author/:id', (req, res) => {
        Controllers.update(req, res);
    });

    app.delete('/author/:id', (req, res) => {
        Controllers.delete(req, res);
    });
}