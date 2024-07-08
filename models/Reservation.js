

const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    reserved_seats: {
        type: Number,
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rest' // Reference to the Restaurant model
    }
},{
    timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Reservation', ReservationSchema, 'reservations');
