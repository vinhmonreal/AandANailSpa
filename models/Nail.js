
import mongoose from 'mongoose';

export const Schema = mongoose.Schema;

export const NailSchema = new Schema({
    name: String,
    image: String,
    price: String,
    description: String,
    type: String
});

export const Nail = mongoose.model('Nail', NailSchema);


export function CreateNewNail(req, res) {
    const newNail = new Nail({
        name: req.body.name,
        image: req.body.image,
        type: req.body.type,
        price: req.body.price,
        description: req.body.description
    })
    newNail.save()
        .then((createdNail) => {
            res.status(201).json(createdNail);
        }
        )
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        }
        )
}

export function RemoveNail(req, res) {
    const id = req.body.id;
    Nail.findByIdAndDelete(id)

        .then((deletedNail) => {
            res.status(200).json(deletedNail);
        }
        )
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        }
        )
}

export function UpdateNail(req, res) {
    const id = req.body.id;
    let name, image, price, description;
    req.body.name == '' ? name = req.body.oldname : name = req.body.name;
    req.body.image == '' ? image = req.body.oldimage : image = req.body.image;
    req.body.price == '' ? price = req.body.oldprice : price = req.body.price;
    req.body.description == '' ? description = req.body.olddescription : description = req.body.description;
    Nail.findByIdAndUpdate(id, {
        name: name,
        image: image,
        price: price,
        description: description,
    })
        .then((updatedNail) => {
            res.status(200).json(updatedNail);
        }
        )
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        }
        )
}

export function GetAllNails(req, res) {
    Nail.find()
        .then((nails) => {
            res.status(200).json(nails);
        }
        )
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        }
        )
}

