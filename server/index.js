const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()
const { Schema } = mongoose
const courseSchema = new Schema({

    courseName: { type: String, required: true },
    courseInfo: { type: String, required: true },
    avatarName: { type: String, required: true },
    avatarWork: { type: String, required: true },
    avatarSrc: { type: String, required: true },
    price: { type: Number, required: true },
    courseSrc: { type: String, required: true }


},
    { timestamps: true })
const app = express()
app.use(cors())
app.use(bodyParser.json())
const Dataa = mongoose.model('datasThree', courseSchema)
app.get('/', (req, res) => {
    res.send('<h1>My dataa</h1>');
});

app.get('/datas', (req, res) => {
    Dataa.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(404).json({ message: err })
        }
    })
})
app.get('/datas/:id', (req, res) => {
    const { id } = req.params
    Dataa.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            }
            else {
                res.status(404).json({ message: err })
            }
        } else {
            res.status(404).json({ message: err })
        }
    })
})
app.delete('/datas/:id', (req, res) => {
    const { id } = req.params
    Dataa.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200)
        }
        else {
            res.status(404)
        }
    })
})
app.post('/datas', (req, res) => {
    let data = new Dataa({
        courseName: req.body.courseName,
        courseInfo: req.body.courseInfo,
        price: req.body.price,
        avatarName: req.body.avatarName,
        avatarWork: req.body.avatarWork,
        avatarSrc: req.body.avatarSrc,
        courseSrc: req.body.courseSrc
    })
    data.save()
    res.status(200)
})
app.put('/datas/:id', (req, res) => {
    Dataa.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.status(200)
        }
        else {
            res.status(404)
        }
    })
    res.status(200)
})


const PORT = process.env.PORT
const CONNECT_URL = process.env.CONNECT_URL
mongoose.set('strictQuery', true);
mongoose.connect(CONNECT_URL, (err) => {
    if (!err) {
        console.log('DB Connect');
        app.listen(PORT, () => {
            console.log('Server Connected');
        })
    } else {
        console.log(err);
    }
})

