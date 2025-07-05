const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true ,
        unique: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['cosmetique', 'aliment', 'textile'] // ✅ valeurs contrôlées
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true }); // ✅ Correction : "timestamps" au lieu de "timestamp"

const Product = mongoose.model('Wess_Product', productSchema);
module.exports = Product;
