const fs = require("fs")
const http = require("http");

fs.writeFile("user-data.txt", "Have a nice day!", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Wrote to File!")
    }
});

class superheros {
    constructor(id, cName,group,powerlevel,species) {
    this.id = id;
    this.cName = cName;
    this.group = group;
    this.powerlevel = powerlevel;
    this.species = species;
} 
};

