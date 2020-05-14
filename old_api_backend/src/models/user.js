const mongoose = require('../database');

const UserSchema =  new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true,
    },    
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        require: true,
    },
    avatar:{
        type: String,
        unique: true,
        required: true,
    },
});

UserSchema.post('save', async function(next){
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;