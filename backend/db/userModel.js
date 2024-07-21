const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    expense_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expenses'
    }],
    total_saving: {
        type: Number,
        default: 0
    }


}, {
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;