var express = require('express');
var router = express.Router();
var userModel = require("./users")

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

/* GET home page. */
router.get("/feed", function (req, res) {
  userModel.find()
    .then(function (alluser) {
      // console.log(alluser)
      res.render("feed", { alluser })
    })
});

router.post("/create", function (req, res) {
  userModel.create({
    image: req.body.image,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,

  })
    .then(function (createduser) {
      res.redirect("feed");
    })
})

router.get("/delete/:id", function (req, res) {
  userModel.findByIdAndDelete(req.params.id)
    .then(function (deleteduser) {
      res.redirect("back")
    })
})


router.get("/edit/:id", function (req, res) {
  userModel.findOne({_id:req.params.id})
    .then(function (foundUser) {
      res.render("edit", {foundUser})
    })
})
router.post("/update/:id", function (req, res) {
  userModel.findOneAndUpdate({_id:req.params.id} ,{
    image: req.body.image,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  })
  .then(function(){
    res.redirect("/feed")
  })
})

module.exports = router; 
