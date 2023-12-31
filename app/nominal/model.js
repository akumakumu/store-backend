const mongoose = require('mongoose');

let nominalSchema = mongoose.Schema({
    coinQuantity: {
        type: Number,
        default: 0
    },
    coinName: {
        type: String,
        require: [true, 'Nama koin harus diisi']
    },
    price: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Param : collections
module.exports = mongoose.model('Nominal', nominalSchema);