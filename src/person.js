var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello1, " + this.name;
    };
    return Person;
}());
var person = new Person('Lee');
console.log(person.sayHello());
//# sourceMappingURL=person.js.map