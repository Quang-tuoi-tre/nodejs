const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Định nghĩa schema cho Pet
const PetSchema = new Schema({
    name: { type: String, required: true }, // Tên thú cưng
    categoryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'category', // Tham chiếu đến collection Category
        required: true 
    }, 
    description: { type: String, required: true }, // Mô tả về thú cưng
    price: { type: Number, required: true }, // Giá của thú cưng
    age: { type: Number, required: true }, // Tuổi của thú cưng
    breed: { type: String, required: true }, // Giống của thú cưng
    image: { type: String },  // URL của hình ảnh thú cưng
    stock: { type: Number, default: 0 },  // Số lượng thú cưng trong kho
    isActive: { type: Boolean, default: true }, // Trạng thái có bán hay không
}, {
    timestamps: true  // Tạo trường createdAt và updatedAt
});

// Export model Pet
module.exports = mongoose.model('pet', PetSchema);
