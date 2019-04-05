var mongoose = require('mongoose');
var Users = mongoose.model('users');
const faker = require('faker');

var createUsers = function(req,res){
    var users = new Users({
        "name":faker.name.findName(),
        "email": faker.internet.email()
    });
    users.save(function(err,newUsers){
        if(!err){
            res.send(newUsers);
        }else{
            res.sendStatus(400);
        }
    });
};

module.exports.createUsers = createUsers;