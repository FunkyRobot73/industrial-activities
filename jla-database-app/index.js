const express = require("express");
const app = express();
const config = require("./config");
const Member = require("./models/member")

const Planet = require('./models/planet');

//Middleware  --  cookie-parser
var cookieParser = require('cookie-parser');
app.use(cookieParser());

//Define table relationships
Member.belongsTo(Planet, {
    foreignKey: "home_planet"
});

Planet.hasMany(Member, {
    foreignKey: "home_planet"
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Test Connection
config.authenticate().then(function(){
    console.log("Database is connected!")
}).catch(function(){
    console.log(err);
});

app.get('/', function(req, res){
    res.cookie('name', 'express').send('cookie set'); 
    console.log('Cookies: ', req.cookies);
 });

//Get all member Data
app.get("/members", function(req, res) {
    Member.findAll().then(function(results){
        res.status(200).send(results);

    }).catch(function(err) {
        res.status(500).send(err);
    });
    console.log('Cookies: ', req.cookies);
    console.log('Signed Cookies: ', req.signedCookies)
})

//Get all humans Data
app.get("/members/human", function(req, res) {
    let data = {
        where: {species_52: "human"}
    }
    
    Member.findAll(data).then(function(results){
        res.status(200).send(results);

    }).catch(function(err) {
        res.status(500).send(err);
    });
})

//Get all member Data
//e.g. ==>  localhost:3000/members/search?age_52=29
app.get("/members/search", function(req, res) {
    
    let data = {
        where: {},
        include: Planet
    };

    //Filter based on species

    if(req.query.species_52 !== undefined) {
        data.where.species_52 = req.query.species_52;
    }

    //filter based on age
    if(req.query.age_52 !== undefined) {
        data.where.age_52 = req.query.age_52;
    }
    
    console.log(req.query.species_52);
    console.log(req.query.age_52);

    Member.findAll(data).then(function(results){
        res.status(200).send(results);

    }).catch(function(err) {
        res.status(500).send(err);
    });
})

//Find member based on ID
app.get("/members/:member_id", function(req, res) {
    let member_id = parseInt(req.params.member_id);

  Member.findByPk(member_id)
  .then(function(result){
    res.status(200).send(result);

})
  .catch(function(err) {
    res.status(500).send(err);
})
});

//Create a new Member
app.post("/members", function(req, res) {
    let member_data = req.body;

    Member.create(member_data)
    .then(function(result){
        res.status(200).send(result);
        })
    .catch(function(err) {
        res.status(500).send(err);
    })
})

//complete update of a member record

app.put("/members/:member_id", function(req, res){
    const member_id = parseInt(req.params.member_id);
    let member_data = req.body;

    //Find the member

    Member.findByPk(member_id)
    .then(function(result){

    if(!result)
    {
        res.status(404).send("member not found")
    }
    else
    {
        //Update member Data
        result.id = member_data.id;
        result.code_name = member_data.code_name;
        result.secret_identity = member_data.secret_identity;
        result.species_52 = member_data.species_52;
        result.age_52 = member_data.age_52;
        result.home_planet = member_data.home_planet;

        //Saves changes to Database
        result.save()
        .then(function(){
            res.status(200).send(result);
        })
        .catch(function(err){
            res.status(500).send(err);
        });
     
    }
})
.catch(function(err){
    res.status(500).send(err);
});
});

//complete delete of a member record

app.delete("/members/:member_id", function(req, res){
    const member_id = parseInt(req.params.member_id);
    
    //Find the member

    Member.findByPk(member_id)
    .then(function(result){

    if(!result)
    {
        res.status(404).send("Member not found")
    }
    else
    {
        //Delete redord from Database

        result.destroy()
        .then(function(){
            res.status(200).send(result);
        })
        .catch(function(err){
            res.status(500).send(err);
        });
     
    }
})
.catch(function(err){
    res.status(500).send(err);
});
});


app.listen(3000, function(){
    console.log("Server running on port 3000!")
});

//Goodluck

// JLA Membership Database