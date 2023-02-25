import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import {MongoClient} from 'mongodb';
import colors from 'colors'

const app = express();

dotenv.config({
    path: './config.env',
});

const url = process.env.MONGO_URI;

const port = 8001;

MongoClient.connect(url)
    .then((client) => {
        console.log('connected to mongodb server');

        const db = client.db('users');
        const users = db.collection('users');

        app.use(cors());
        app.use(express.json());

        app.get('/', (req, res) => {
            res.send('database conected!'.red);
        });

        // save user into collection
        app.post('/tinder/cards', (req, res) => {
            users
                .insertOne(req.body)
                .then((result) => {
                    res.status(201).json({
                        success: true,
                        data: result,
                    });
                })
                .catch((error) => {
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    });
                });
        });

        // get all users from collection
        app.get('/tinder/cards', (req, res) => {
            users
                .find({})
                .toArray()
                .then((result) => {
                    res.status(200).json({
                        success: true,
                        data: result,
                    });
                });
        });

        // udpate a user
        app.put('/tinder/cards', (req, res) => {
            users
                .findOneAndUpdate(
                    { name: req.body.name },
                    {
                        $set: {
                            duration: req.body.duration,
                        },
                    },
                    { upsert: true }
                )
                .then((result) => {
                    res.status(200).json({
                        success: true,
                        data: result,
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message: err.message,
                    });
                });
        });

        // delete a users

        app.delete('/tinder/cards', (req, res) => {
            users
                .deleteOne({ name: req.body.name })
                .then((result) => {
                    res.status(200).json({
                        success: true,
                    });
                })
                .catch((error) => {
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    });
                });
        });

        //app.listen(port, () => console.log('listening on port ' + port));
    })
    .catch(console.error);

app.get('/tinder/hello', (req, res)=>{
    res.send("Hello pussie");
})


app.listen(port, () => console.log('listening on port ' + port));