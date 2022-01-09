const express = require('express') 
const { update } = require('../models/user')
const router = express.Router()
const userModel = require('../models/user')



router.get('/',(req,res)=>{
res.send('NODE -backend ')
})

router.get('/getUsers',(req,res) =>{
   userModel.find(req.body).then((user)=>{
       res.json(user);
    }).catch((err)=>{
       console.log(err)
       res.send(err);
    })

   })


router.post('/create',(req,res)=>{
   userModel.create(req.body).then((user)=>{
      res.json(user)
   }).catch((err)=> {
      console.log(err)
      res.send(err)
   })
})

router.get('/find:id',(req,res)=>{
   userModel.findOne({_id:req.params.id}).then((user)=>{
      res.json(user)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
})

router.delete('/delete:id',(req,res)=>{
   userModel.deleteOne({_id:req.params.id}).then((user)=>{
      res.send("Deleted"+req.params.id)
   }).catch((err)=>{
      console.log(err)
      res.send("err")
   })
})

router.put('/update:id',(req,res)=>{
   userModel.updateOne({_id:req.params.id},{$set:{name:req.body.name,password:req.body.password}}).then((updated)=>{
      res.send("updated id: "+req.params.id)
   }).catch((err)=>{
      console.log(err)
      res.send('err')
   })
})



module.exports = router;