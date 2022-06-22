//Models
const { models } = require('./database/models/models')
const sequelize = require('./database/sequelize');
require('./database/associations')

const camiones = [
    { matricula: 15895, modelo: "Ford 4000", tipo: "Plano", potencia: 345 },
    { matricula: 15894, modelo: "Renault 460", tipo: "Plano", potencia: 460 },
    { matricula: 15892, modelo: "Scania 800", tipo: "Tractor", potencia: 650 },
];

const camioneros = [
    { nombre: "Jose Antonio", direccion: "Escondido@gmail.com", dni: 123445667, telefono: 543546588999, salario: 50000, localidad: "Cordoba" },
    { nombre: "Maria Ester", direccion: "Escondido1@gmail.com", dni: 123445668, telefono: 543546588999, salario: 50000, localidad: "Iruya" },
    { nombre: "Alberto Raul", direccion: "Escondido2@gmail.com", dni: 123445669, telefono: 543546588999, salario: 50000, localidad: "Santa Fe" },
    { nombre: "Maria Laura", direccion: "Escondido3@gmail.com", dni: 123445670, telefono: 543546588999, salario: 50000, localidad: "Olavarria" },
    { nombre: "Jose Maria", direccion: "Escondido4@gmail.com", dni: 123445671, telefono: 543546588999, salario: 50000, localidad: "Concordia" },
    { nombre: "Sofia Marta", direccion: "Escondido5@gmail.com", dni: 123445672, telefono: 543546588999, salario: 50000, localidad: "Vicente Lopez" },
]

sequelize.sync({ force: true }).then(() => {
    camiones.forEach(element => {
        models.Camion.create(element).then(obj => {
            console.log(`models.Camion Creada: ${obj}`)
        }).catch(error => {
            console.log(error)
        })

    });
}).then(() => {
    camioneros.forEach(element => {
        models.Camionero.create(element).then(obj => {
            console.log(`models.Camionero Creada: ${obj}`)
        }).catch(error => {
            console.log(error)
        })

    });
}).then(() => {

    models.Camionero.findAll().then(camioneros_list => {
        models.Camion.findAll().then(camiones_list => {
            camioneros_list[0].addCamione(camiones_list, { through: { fecha: "01/01/2022" } })
        });
    });

})