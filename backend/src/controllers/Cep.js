var express = require('express');
var mongoClient = require('mongodb').MongoClient;
const router = express.Router();
router.use(express.json())

var url = 'mongodb://localhost:27017/projetoweb';

mongoClient.connect(url, function (err, client) {

    router.get('/', (req, res) => {

        var db = client.db('projetoweb')
        db.collection('cep').find({}).toArray((err, docs) => {
            if(err){
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).send(docs)
            }
        })
    })
    
    router.post('/', (req, res) => {
        var db = client.db('projetoweb')
        cepBanco = db.collection('cep')
        cepBanco.find({ cep: req.body.cep }).toArray((err, cepExistente) => {
            if(err){
                res.status(500).send('Internal Server Error');
            } else {
                if(!cepExistente){
                    cepBanco.insertOne(req.body, function(err, response) {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.status(201).send('CEP adicionado!');
                        }
                    })
                } else {
                    res.status(400).send('CEP já existe!')
                }
            }
        });
    })

    router.post('/find', (req, res) => {
        var db = client.db('projetoweb')
        cepBanco = db.collection('cep')
        cepBanco.find({ cep: req.body.cep }).toArray((err, cepExistente) => {
            if(err){
                res.status(500).send('Internal Server Error');
            } else {
                if(cepExistente){
                    res.status(200).send(cepExistente);
                } else {
                    res.status(404).send('Nenhum CEP encontrado')
                }
            }
        });
    })
})


module.exports = router;