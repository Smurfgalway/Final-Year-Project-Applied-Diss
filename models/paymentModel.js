var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
        to: {type: String, required: true},
        from: {type: String, required: true},
        amounts: {type: Number, required: true},
        fees: {type: Number, required: true}, 
        txid: {type: String, required: true},
        success: {type: Boolean, required: true},
        lat: {type: Number, required: false},
        long: {type: Number, required: false}
    },
    { collection : 'payment' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('payment', schema);
