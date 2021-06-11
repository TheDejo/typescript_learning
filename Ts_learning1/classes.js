var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    return User;
}());
var john = new User('john', 'john@gmail.com', 23);
console.log(john.age);
