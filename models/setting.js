
import mongoose from "mongoose";

export const Schema = mongoose.Schema;

export const SettingShema = new Schema({
    deliveryText: String,
    provider: String,
    userName: String,
});

export const Setting = mongoose.model("Setting", SettingShema);

export function CreateNewSetting(req, res) {
    const newSetting = new Setting({
        deliveryText: req.body.deliveryText,
        provider: req.body.provider,
        userName: req.body.userName,
    });
    newSetting
        .save()
        .then(createdSetting => {
            res.status(200).json(createdSetting);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                success: false
            });
        });
}


export function GetSetting(req, res) {
    Setting.find()
        .then(setting => {
            res.status(200).json(setting);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                success: false
            });
        });
}

export function DeleteSetting(req, res) {
    const id = req.body.id;
    Setting.findByIdAndDelete(id)
        .then(deletedSetting => {
            res.status(200).json(deletedSetting);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                success: false
            });
        });
}




