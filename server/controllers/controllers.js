const Author = require('../models/models');

module.exports = {
    all: (req, res) => {
        Author.find({}).sort({ author: 1 })
            .then(
                data => res.json({ status: true, authors: data })
            )
            .catch(
                error => res.json({ status: false, messages: error })
            )
    },

    getOne: (req, res) => {
        Author.find({ _id: req.params.id })
            .then(
                data => res.json({ status: true, author: data[0] })
            )
            .catch(
                error => res.json({ status: false, message: error })
            )
    },

    create: (req, res) => {
        Author.create(req.body)
            .then(
                data => res.json({ status: true, messages: { success: "Author successfully added!" }, author: data })
            )
            .catch(
                err => {
                    if (err) {
                        let messages = {}
                        for (let key in err.errors) {
                            messages[key] = err.errors[key].message;
                        }
                        res.json({ status: false, messages: messages });
                    }
                }
            )
    },

    update: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, context: 'query' })
            .then(
                data => res.json({ status: true, messages: { success: "Author successfully Updated!" }, author: data })
            )
            .catch(
                err => {
                    if (err) {
                        let messages = {}
                        for (let key in err.errors) {
                            messages[key] = err.errors[key].message;
                        }
                        res.json({ status: false, messages: messages });
                    }
                }
            )
    },


    delete: (req, res) => {
        Author.findByIdAndRemove({ _id: req.params.id })
            .then(
                data => res.json({ status: true, messages: { success: "Author successfully Delete!" }, author: data })
            )
            .catch(
                error => req.json({ status: false, messages: error })
            )
    }
}