const express = require ('express');
const router = express.Router();
const Forms = require ('../models/Form')


//get all the forms
router.get('/', async (req, res) => {
    const forms = await Forms.find()
    res.json(forms)
});


//post a new form
router.post('/', async (req, res) => {
    const form = req.body;
    const newForm = new Forms(form);
    await newForm.save();
    res.json(form)
})

//delete a form

router.delete('/:id', async (req, res) =>{
    await Forms.findByIdAndDelete(req.params.id)
    res.json({status: 'Eliminado'})
})

router.get('/match', async (req, res) => {
    const matchs = await Forms.aggregate([
    { $group: {
        _id: { Date: "$date", Time: "$time", Place: "$place" },  
        Data: { $addToSet: {Name: "$firstName", Surname:"$surname", Email: "$email", Number: "$contactNumber"}},
        count: { $sum: 1 }
      } }, 
      { $match: { 
        count: { $gte: 2} 
      } },
      
    ]);

    res.json(matchs)

});


module.exports = router;