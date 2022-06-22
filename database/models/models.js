const models = {
    Camionero: require('./Camionero'),
    Camion: require('./Camion'),
    Paquete: require('./Paquete'),
    Provincia: require('./Provincia'),
    CamioneroCamion: require('./CamioneroCamion')
}

let modelList = []

Object.keys(models).forEach(model => {
    modelList.push(models[model])
})

module.exports = {
    models: models,
    modelList: modelList
}