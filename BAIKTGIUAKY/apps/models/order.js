const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'customer', // Tham chiếu đến collection Customer
        required: true 
    },
    petId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'pet', // Tham chiếu đến collection Pet
        required: true 
    },
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Completed', 'Cancelled'], 
        default: 'Pending' 
    },
    orderDate: { type: Date, default: Date.now }
}, {
    timestamps: true  // Tạo trường createdAt và updatedAt tự động
});

module.exports = mongoose.model('Order', OrderSchema);
