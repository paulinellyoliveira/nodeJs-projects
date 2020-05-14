const express = require('express');

const router = express.Router();

const User =  require ('../models/User');

router.post('/register', async(req, res)=>{   

    try{
        const user = await User.create(req.body);        
        return res.send({user});

    }catch(err){        
        return res.status(400).send({error: 'Registration failed => ' +err});
    }
});

router.get('/allUser', async(req, res)=>{

    try{
         const user = await User.find();
         return res.send({user});
    }catch(err){
         return res.status(400).send({error: 'Users not found => ' +err});
    } 
 });

router.get('/user/:userId', async(req, res)=>{

   try{
    const user = await User.findById(req.params.userId);
    return res.send({user});
   }catch(err){
        return res.status(400).send({error: 'User not found => ' + err});
   } 
});

router.delete('/remove/:userId', async(req, res)=>{

    try{
        await User.findByIdAndRemove(req.params.userId);
        return res.send('Successful removing user!');
    }catch(err){
        return res.status(400).send({error: 'Error while deleting => ' +err});
    } 
});

router.put('/edit/:userId', async (req,res)=>{

   try{        
        const {id, first_name, last_name, avatar} = req.body;
        const user = await User.findByIdAndUpdate(req.params.userId, {
            id,
            first_name, 
            last_name, 
            avatar
        }, {new: true});
        
        await user.save();
        return res.send({user});

   }catch(err){
        return res.status(400).send({error: 'Failed to update user => ' +err});
   } 
});

module.exports = app => app.use('/auth', router); 

/*
    var user = User.findOneAndUpdate({ userId: req.params.userId }, req.body, { upsert: true }, function (err, doc) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(req.body);
        res.end();
    });
*/

/*

PUT ONE customer
router.put('/customers/:id', function (req, res, next) {
    var db = require('../db');
    var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
    Customer.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(req.body);
        res.end();
    });
});
*/

/*
const express = require('express');

const User =  require ('../models/User');

const router = express.Router();

router.post('/register', async(req, res)=>{

    console.log("Req: ",req.body);

    try{
        const user = await User.create(req.body);
        
        console.log("User: ",user);    
        
        return res.send({user});

    }catch(err){
        console.log("User: ");        
        return res.status(400).send({error: 'Registration failed ' +err});
    }
});

module.exports = app => app.use('/auth', router);
*/