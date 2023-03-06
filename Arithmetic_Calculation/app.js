const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));

let students = [
    {id: 01, name: "Bruce Banner", age: 32, city: "Gotham"},
    {id: 02, name: "Peter Parker", age: 25, city: "New York"},
    {id: 03, name: "Logan", age: 125, city: "Toronto"},
    {id: 04, name: "Clark Kent", age: 29, city: "Metropolis"}
];

//Get All Students

app.get("/students", function(req, res) {
    res.send(students);
});

//Create A Student

app.post("/students", function(req, res) {
    let student_data = req.body;
    student_data.id = parseInt(student_data.id);
    students.push(student_data);

    res.send(student_data);
})

app.get("/students/:student_id", function(req, res) {
    let student_id = parseInt(req.params.student_id);
    let student_data = students.find(function(item) {
        return item.id === student_id
    })
    res.send(student_data.name)
});

app.put("/students/:student_id", function(req, res) {
    let student_id = parseInt(req.params.student_id);

    let student_data = req.body;
    student_data.id = parseInt(student_data.id);
    student_data.age = parseInt(student_data.age);

    let index = students.findIndex(function(item) {
        return item.id === student_data.id;
        
    });

    students[index] = student_data;

    res.send(student_data);

})

app.patch('/students/:student_id', function(req, res) {
    let student_id = parseInt(req.params.student_id)   
    
    let student_data = req.body;

    //find the student array index
    let index  = students.findIndex(function(item) {
        return item.id === student_id;
    });

    students[index].name = student_data.name;

    res.send(students[index]);

})

app.listen(3000, function() {
    console.log("Server is running on Port 3000!");
});