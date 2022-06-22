const express = require("express");
const { models } = require("../database/models/models");


const model = models.Camion
const router = express.Router();


router.get("/", (req, res) => {
    model.findAll({
        attributes: ["matricula"],
        include: {
            association: 'camioneros'
        }
    }).then((list) => {
        res.json(list);
    });
});



module.exports = router;