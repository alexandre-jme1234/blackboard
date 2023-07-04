const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	total: Number,
    shippingFees: Number,
    isPaid: Boolean,
    purchaseDate: Date,
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
});

const Order = mongoose.model('orders', orderSchema);
module.exports = Order;