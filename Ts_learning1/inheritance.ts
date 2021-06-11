interface UserInterface {
  name: string;
  email: string;
  age: number;
  id:number; 

  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;
  id:number; 

  constructor(id: number, name: string, email: string, age: number){
    this.name = name;
    this.email = email;
    this.age = age;
    this.id = id;
  }
  payInvoice(){
    console.log(this.name+ ' paid invoive')
  }
}

class Member extends User {
  constructor(id: number, name: string, email: string, age: number){
    super(id, name, email, age);
  }
  payInvoice(){
    super.payInvoice()
  }
}


let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 52)

mike.payInvoice();