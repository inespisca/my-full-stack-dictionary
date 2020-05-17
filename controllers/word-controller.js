/* eslint-disable indent */
const word = require('../models/Word');

const getWords = (req, res, next) => {
    word.getWords((err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.word = results;
        next();
    });
};


// Backoffice: word

const getWordsId = (req, res, next) => {
    word.getWordsId(req.params.id, (err, results) => {
        if (err) {
            return res.render('error', { error: err });
        }
        req.words = results;
        next();
    });
};

const createWords = (req, res, next) => {
    word.create(req.body, (err) => {
        if (err) {
            return res.render('error', { err });
        }
        res.redirect('/');
    });
};

const deleteWords = (req, res, next) => {
    word.delete(req.body.id, (err) => {
        if (err) {
            return res.render('error', { err });
        }
        res.redirect('/');
    });
};

const editWords = (req, res, next) => {
    word.update(req.body, req.params.id, (err) => {
        if (err) {
            return res.render('error', { err });
        }
        res.redirect('/');
    });
};

module.exports = { getWords, getWordsId, createWords, deleteWords, editWords };

