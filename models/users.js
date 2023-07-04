const mongoose = require('mongoose');

const addresseSchema = mongoose.Schema({
    street: String,
    city: String,
    zipCode: String,
    isFavourite: Boolean,
})

const userSchema = mongoose.Schema({
	firstName: String,
    lastName: String,
    email: String,
    inscriptionDate: Date,
    addresses: [addresseSchema],
});


const User = mongoose.model('users', userSchema);
module.exports = User;