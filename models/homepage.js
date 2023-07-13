
import mongoose from "mongoose";

export const Schema = mongoose.Schema;

export const HomepageSchema = new Schema({
    h1: String,
    h2: String,
    h3: String,
    p: String,
    image1: String,
    image2: String,
});

export const Homepage = mongoose.model("Homepage", HomepageSchema);

export function CreateNewHomepage(req, res) {
    const newHomepage = new Homepage({
        h1: req.body.h1,
        h2: req.body.h2,
        h3: req.body.h3,
        p: req.body.p,
        image1: req.body.image1,
        image2: req.body.image2,
    });
    newHomepage
        .save()
        .then(createdHomepage => {
            res.status(200).json(createdHomepage);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                success: false
            });
        });
}

export function UpdateHomePage (req, res) {
    const id = '64a9bde80a0ea3d878b563ba'
    let h1, h2, h3, p, image1, image2;
    req.body.h1 == '' ? h1 = req.body.oldh1 : h1 = req.body.h1;
    req.body.h2 == '' ? h2 = req.body.oldh2 : h2 = req.body.h2;
    req.body.h3 == '' ? h3 = req.body.oldh3 : h3 = req.body.h3;
    req.body.p == '' ? p = req.body.oldp : p = req.body.p;
    req.body.image1 == '' ? image1 = req.body.oldimage1 : image1 = req.body.image1;
    req.body.image2 == '' ? image2 = req.body.oldimage2 : image2 = req.body.image2;
    const updatedHomepage = Homepage.findByIdAndUpdate(id, {
        h1: h1,
        h2: h2,
        h3: h3,
        p: p,
        image1: image1,
        image2: image2
    }, { new: true })
        .then((updatedHomepage) => {
            res.status(200).json(updatedHomepage);
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        })
}

export function GetHomepage (req, res) {
    Homepage.find()
        .then((homepage) => {
            res.status(200).json(homepage);
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        })
}
