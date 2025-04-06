// apps/entity/pet.js
class Pet {
    constructor(name, categoryId, description, price, age, breed, image, stock, isActive) {
      this.name = name;
      this.categoryId = categoryId;
      this.description = description;
      this.price = price;
      this.age = age;
      this.breed = breed;
      this.image = image;
      this.stock = stock;
      this.isActive = isActive;
    }
  
    // Phương thức có thể xử lý dữ liệu hoặc các tính toán liên quan đến Pet
    getDetails() {
      return {
        name: this.name,
        categoryId: this.categoryId,
        description: this.description,
        price: this.price,
        age: this.age,
        breed: this.breed,
        image: this.image,
        stock: this.stock,
        isActive: this.isActive,
      };
    }
  }
  
  module.exports = Pet;
  