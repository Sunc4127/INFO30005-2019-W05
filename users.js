var mongoose = require('mongoose');
var usersSchema = mongoose.Schema(
    {
        "name":String,
        "email":String
    }
);
mongoose.model('users',usersSchema);