const Contact = require("../models/contact");

const getContacts = (async (req, res) => {
    try{
        //find contacts
        const contacts = await Contact.find({user_id: req.user.id});
    
        //send the response
        console.log("contacts fetched!");
        return res.status(200).json(contacts);
    }
    catch(err){
        console.log("error!");
        return res.status(404).json({err: "Contacts Not Found"});
    }
   
});

const createContacts = (async (req, res) => {
    try{
        const {name, email, phone} = req.body;
        if(!name || !email || !phone){
            res.status(400).json({error: "All Fields Are Mandatary!"});   
        }
        
        //create contact
        const createContact = await Contact.create({
            name,
            email,
            phone,
            user_id: req.user.id
        });
    
        //save the contact in db
        createContact.save();

        //send the response
        console.log("contact created!");
        return res.status(201).json(createContact);
    }
    catch(err){
        console.log("error!");
        return res.status(500).json({err: "Internal Server Error"});
    }
});

const getContactById = ( async (req, res) => {

    //find contact
    try{
        const id = req.params.id;
        const getContact = await Contact.findById(id);
    
        //send response
        console.log('contact fetched!');
        return res.status(200).json(getContact);
    }
    catch(err){
        console.log("error!");
        return res.status(404).json({err: "Contact Not Found"});
    }
   

});

const updateContact = (async (req, res) => {
    try{
        //update contact
        const id = req.params.id;
        const getContact = await Contact.findById(id);
    
        if(getContact.user_id.toString() !== req.user.id){
            res.status(403).json({error: "User don't have permission to update other user contact!"})
        }
        const updatedContact = await Contact.findByIdAndUpdate(
            id,
            req.body,
            {new: true}   
        );

        console.log("contact updated and fetched!");
        return res.status(200).json(updatedContact);
    }
    catch(err){
        console.log("error!");
        return res.status(404).json({err: "Contact Not Found"});
    }
   

});

const deleteContact = (async (req, res) => {
    try{
        //delete contact
        const id = req.params.id;
        const getContact = await Contact.findById(id);
        
        if(getContact.user_id.toString() !== req.user.id){
            res.status(403).json({error: "User don't have permission to delete other user contact!"})
        }

        const deleteContact = await Contact.findByIdAndDelete(id);
        console.log("contact deleted!");
        return res.status(200).json(deleteContact);
    }

    catch(err){
        console.log("error!");
        return res.status(404).json({err: "Contact Not Found"});
    }

});

module.exports = {
    getContacts,
    createContacts,
    getContactById,
    updateContact,
    deleteContact
}