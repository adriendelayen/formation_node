//const express = require('express');
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import models from './models';

const app= express();


app.use((req, res, next) => { // next permet de continuer l'action, de passer au prochain middleware
    console.log(`Request URL: ${req.url}`);
    next();
});

// middleware
app.use(helmet());
app.use(express.static(path.join(__dirname,'public'))); // sans distinction quel que soit l'url . si elle existe (ressource static) il l'affiche
app.use(express.json());

app.get('/product',(req,res) => {
    const products = [
        { id: 1, name:"pomme", price:12.90 },
        { id: 2, name:"cerise", price:0.99 },
        { id: 3, name:"poire", price:5 }
        
    ];
    res.json(products);
});
app.get('/product/:id',(req,res) => {
    const products = [
        { id: 1, name:"pomme", price:12.90 },
        { id: 2, name:"cerise", price:0.99 },
        { id: 3, name:"poire", price:5 },
        { id: 10, name:"banane", price:10 }
        
    ];

    const id = req.params.id;
    const product = products.find((p)=>{
        return p.id == id;
    });

    if(!product) {
        res.status(404).json({'message' : `La ressource n'existe pas`});
        return;
    }


    res.json(product);
});


app.get('/client', async (req,res) => {

    const data = req.body;

    try{
        const clients = await models.Client.findAll();
        res.json(clients);
    }catch(e) {
        res.status(400).json({ message: e.message});
    }
});

app.get('/client/:id', async (req,res) => {

    const id = req.params.id;

    try{
        const client = await models.Client.findByPk(id);

        if(! client){
            res.status(404).json({'message': `La ressource n'existe pas`});
            return;
        }
    
        res.json(client);
    }catch(e) {
        res.status(400).json({ message: e.message});
    }
});


app.post('/client', async (req,res) => {
    // const data = {nom: "Doe", prenom: "John", mail:"john.doe@gmail.com"};
    const data = req.body;

    try{
        const client = await models.Client.create( data );
        res.status(201).json(client);
    }catch(e) {
        res.status(400).json({ message: e.message});
    }
});

app.delete('/client/:id', async (req, res) => {

    const id = req.params.id;
    try{
        const client = await models.Client.destroy({ where: { id } });

    
        res.status(204).json(client);
    }catch(e) {
        res.status(400).json({ message: e.message});
    }
});

app.put('/client/:id', async (req,res) => {
    const id = req.params.id;
    const data = req.body;

    try{
        const client = await models.Client.update(data, { where: { id } });

        res.status(204).json(client);
    }catch(e) {
        res.status(400).json({ message: e.message});
    }
});

const port = 3200;

app.listen(port, 'localhost', () =>{
    console.log(`personal node server is listening on port http://localhost:${port}`);
    console.log(`shutdown node server with CTRL + C`);
});