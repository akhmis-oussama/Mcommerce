const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    products: [{
        productId: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    __v: {
        type: Number,
        required: false
    }
});

module.exports = Card = mongoose.model('card', CardSchema);
