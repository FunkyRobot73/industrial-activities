class Students {
    constructor(name, age, nationality, gender="female") {
      this.name = name;
      this.age = age;
      this.nationality = nationality;
      this.gender = gender;
    }

    getNationality() {
        console.log(`${this.name}'s nationality is ${this.nationality}.`);
      }
  }

class Iundergrad extends Students {
    constructor(name, age, nationality, gender, GPA) {
        super(name, age, nationality, gender="female");
        this.GPA = GPA;
    }
}

const student01 = new Students ("Diana Prince", 25, "Canadian");
const Ustudent01 = new Iundergrad ("Bruce Wayne", 25, "Americana", "", 0.0);

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
Ustudent01.getNationality();

//console.log(Ustudent01)