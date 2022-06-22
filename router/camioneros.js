const express = require("express");
const { models } = require("../database/models/models");

const model = models.Camionero
const router = express.Router();


router.get("/", (req, res) => {
    model.findAll({
        attributes: ["dni"],
        include: {
            association: 'camiones',
            attributes: ['matricula'],
            through: {
                attributes: ['fecha']
            }
        }
    }).then((list) => {
        res.json(list);
    });
});



module.exports = router;