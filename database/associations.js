//Models
const { models, modelList } = require("./models/models");

modelList.forEach(model => {
    model.associate(models)
});