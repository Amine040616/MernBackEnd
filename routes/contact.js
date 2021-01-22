const express=require('express')
const router=express.Router()
const Contact = require('../models/Contacts')


//@ path (localhost:5000/contacts/test)
//test route
//public/private
router.get('/test', (req, res)=>{
    res.send('twisted')
})


//adding new contact in DB
router.post('/addContact', (req, res)=>{
    const {name, email, phone}=req.body;
    const newContact = new Contact({name,phone,email})
    newContact.save()
    .then(contacts=>res.send(contacts))
    .catch(err=> console.log('erreur'))
})


//getting all contacts
router.get('/getting', (req, res)=>{
    Contact.find()
    .then(el=>res.send(el))
    .catch(err=> console.log('erreur'))
})


//delete contact
router.delete('/deleto/:_id', (req, res)=>{
    const {_id}=req.params;
    Contact.findByIdAndDelete(_id)
    .then(el=>res.send(el))
    .catch(err=> console.log('erreur'))
})


//get contact by id

router.get('/get/:_id',(req, res)=>{
    const {_id}=req.params;
    Contact.findById({_id})
    .then(el=>res.send(el))
    .catch(err=> console.log('erreur'))
})

//update contact

router.put('/update/:_id', (req, res)=>{
    const {_id}=req.params;
    const {name, email, phone}=req.body;
    Contact.findByIdAndUpdate({_id}, {$set:{name, email, phone}})
    .then(el=>res.send(el))
    .catch(err=> console.log('erreur'))
})


module.exports=router