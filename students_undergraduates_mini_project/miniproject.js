var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students(name, age, nationality, gender) {
        if (gender === void 0) { gender = "female"; }
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.gender = gender;
    }
    Students.prototype.getNationality = function () {
        return "".concat(this.name, "'s nationality is ").concat(this.nationality, ".");
    };
    return Students;
}());
var Iundergrad = /** @class */ (function (_super) {
    __extends(Iundergrad, _super);
    function Iundergrad(name, age, nationality, gender, GPA) {
        var _this = _super.call(this, name, age, nationality, gender = "female") || this;
        _this.GPA = GPA;
        return _this;
    }
    return Iundergrad;
}(Students));
var student01 = new Students("Diana Prince", 25, "Canadian");
var Ustudent01 = new Iundergrad("Bruce Wayne", 25, "Americana", 0.0);
var studentNew01 = { name: "Carlos", age: 49, nationality: "Portuguese" };
console.log(student01.name);
console.log(student01.age);
console.log(student01.nationality);
console.log(student01.gender);
console.log(" ");
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
