const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [20, 'Password must be less than 20 characters long'],
        match: [
            /^[A-Za-z0-9]{8,200000}$/,
            'Password must contain only letters and numbers, 8 to 20 characters'
        ]
    },
    role: {
        type: String,
        enum: ['superadmin', 'admin', 'user'],
        default: 'user'
    },
    refreshToken:{
        type : String
    },
    isActive:{
        type: Boolean,
        default : false
    }
}, { timestamps: true });
userSchema.methods.setActive = (action)=>{
    this.action.push(action);
    return this.save();
}
userSchema.methods.getActions = () =>{
    return this.actions;
}

const User = mongoose.model('Wess_user', userSchema);
module.exports = User;
