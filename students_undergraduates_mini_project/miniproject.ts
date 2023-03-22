class Students {
    constructor(name:string, age:number, nationality:string, gender:string="female") {
      this.name = name;
      this.age = age;
      this.nationality = nationality;
      this.gender = gender;
    }

    getNationality() : string {
        return `${this.name}'s nationality is ${this.nationality}.`;
      }
  }

class Iundergrad extends Students {
    constructor(name:string, age:number, nationality:string, gender:string, GPA:string) {
        super(name, age, nationality, gender="female");
        this.GPA = GPA;
    }
}

interface Istudent{
    name: string;
    age: number;
    nationality:string;
}

let student01 = new Students ("Diana Prince", 25, "Canadian");
let Ustudent01 = new Iundergrad ("Bruce Wayne", 25, "Americana",  0.0);

let studentNew01: Istudent = {name:"Carlos", age:49, nationality:"Portuguese"}

console.log(student01.name);
console.log(student01.age);
console.log(student01.nationality);
console.log(student01.gender);

console.log(" ")

console.log(Ustudent01.name);
console.log(Ustudent01.age);
console.log(Ustudent01.nationality);
console.log(Ustudent01.gender);
console.log(Ustudent01.GPA);
console.log(Ustudent01.getNationality());
Ustudent01.getNationality();

console.log(studentNew01.name);
console.log(studentNew01.age);
console.log(studentNew01.nationality);
//console.log(student01.gender);


