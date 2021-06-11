class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number){
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: ' +this.name)
  }

 private register(){
    console.log(this.name+ ' is now registered')
  }
}

let john = new User('john', 'john@gmail.com', 23);

console.log(john.age);

john.register();