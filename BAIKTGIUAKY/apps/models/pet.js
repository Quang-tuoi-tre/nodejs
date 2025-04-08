const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Định nghĩa schema cho Pet
const PetSchema = new Schema({
    name: { type: String, required: true }, // Tên thú cưng
    categoryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'category', // Tham chiếu đến collection Category
      
    }, 
    description: { type: String,  }, // Mô tả về thú cưng
    price: { type: Number, }, // Giá của thú cưng
    age: { type: Number,  }, // Tuổi của thú cưng
    breed: { type: String, }, // Giống của thú cưng
    image: { type: String },  // URL của hình ảnh thú cưng
    stock: { type: Number, default: 0 },  // Số lượng thú cưng trong kho
    isActive: { type: Boolean, default: true }, // Trạng thái có bán hay không
}, {
    timestamps: true,  // Tạo trường createdAt và updatedAt
    collection: 'pets' 

});

// Export model Pet
module.exports = mongoose.model('pet', PetSchema);
