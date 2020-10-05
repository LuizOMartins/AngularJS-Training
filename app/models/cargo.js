var mongoose = require('mongoose');

var schema = mongoose.Schema({

    descricao: {
        type: String,
        required: true
    }
});

mongoose.model('cargos', schema);