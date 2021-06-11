//====================
//         1       
//      VARIABLES  
//====================
// let hello: string = "world"
// make sure the types are ststed explicitly
//====================
//         2       
//      FUNCTIONS  
//====================
// const getFullName = (name:string, surname:string):string => {
//   return name+ " " +surname
// };
// console.log(getFullName("Divine", "Ogbe"))
//====================
//         3       
//      InterFaces  
//====================
//this are special entities in typscript which help us create objects with some properties
// th question mark (?)signifies that age is not mandatory
// interface IUser {
//   name: string,
//   age?: number
//   getMessage(): string
// }
// const user: IUser = {
//   name:"Divine",
//   age: 27,
//   getMessage(){
//     return "Hello " + this.name;
//   }
// }
// const user2: IUser = {
//   name:"Success",
//   getMessage(){
//     return "Hello " + this.name;
//   }
// }
// console.log(user.getMessage())
//====================
//         4       
//  Types and Union  
//====================
//====================
//         4.1       
//  Union Operator  
//====================
// interface IUser {
//   name: string
//   surname: string
// }
// let pageName: string | number ="1"
// let errorMessage: string | null = null;
// let user: IUser | null = null;
//====================
//         4.2 
//    Type Aliases 
//====================
// type ID = string;
// type PopularTag = string;
// interface IUser {
//   id: ID
//   name: string
//   surname: string
// }
// const populartags: PopularTag[] = ['dragon', 'cofee']
//====================
//         4.3 
//    Combining both 
//====================
// type ID = string;
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;
// const dragonsTag: MaybePopularTag ="dragon"
//====================
//         5
//Any/Void/Never/Unknown 
//====================
//====================
//         5.1 
//        Void 
//====================
// const doSomthing = (): void => {
//   console.log("doSomthing");
// }
// void is undefined and null
//====================
//         5.2 
//          Any 
//====================
//Any type turns off Typscript checks
// let foo: any = "foo"
// console.log(foo.bar())
//====================
//         5.3 
//        Never 
//====================
//this is a function that will never happen
// const doSomthing = (): void => {
//   throw "never";
// }
//====================
//         5.4 
//       Unknown 
//====================
// let vAny: any = 10
// let vUnknown: unknown = 10;
// let s1: string = vAny;
// let s2: string = vUnknown as string;
// let pageNumber: string = "1";
// let numericPageNumber: number = (pageNumber as unknown) as number;
// console.log(vAny.foo());
// console.log(vUnknown.foo());
//====================
//          6 
//Working with  the Dom 
//====================
// let page: any = "1";
// let pageName  = page as  string
//as keyword is known as type assertion
// const someElement = document.querySelector(".foo")
// as HTMLInputElement;
// console.log('someElement', someElement.value)
//====================
//          6.1 
//    Adding Listener 
//====================
// someElement.addEventListener('blur', (event) => {
//   const target = event.target as HTMLInputElement
//   console.log('event', target.value)
// })
//====================
//          7 
//        Classes
//====================
// class User {
//   private firstName: string;
//   private lastName: string;
//   readonly unchangableName: string;
//   constructor(firstName:string, lastName: string){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.unchangableName = firstName;
//   }
//   // changableName(): void {
//   //   this.unchangableName = "foo";
//   // }
//   getFullName(): string {
//     return this.firstName+ '' +this.lastName;
//   }
// }
// const user = new User("Divine", "Ogbe");
// console.log(user)
//private| public| protected |readonly
//====================
//          7.1 
// Interface in Class
//====================
// interface UserInterfce {
//   getFullName(): string
// }
// class User implements UserInterfce {
//   firstName: string;
//   private lastName: string;
//   readonly unchangableName: string;
//   static maxAge = 30
//   constructor(firstName:string, lastName: string){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.unchangableName = firstName;
//   }
//   // changableName(): void {
//   //   this.unchangableName = "foo";
//   // }
//   getFullName(): string {
//     return this.firstName+ '' +this.lastName;
//   }
// }
// const user = new User("Divine", "Ogbe");
// console.log(user)
// // 7.7.1 Inheretance
// class Admin extends User {
//   private editor: string
//   setEditor(editor: string): void {
//     this.editor = editor
//   }
//   getEditor(): string {
//     return this.editor
//   }
// }
// const admin = new Admin ('black', 'Kamaru');
// console.log(admin.firstName)
//====================
//          8 
//      Generics
//====================
// const addId = <T extends object> (obj: T) => {
//   const id = Math.random().toString(16)
//   return {
//     ...obj,
//     id
//   }
// }
// interface UserInterfce  {
//   name: string;
// }
// const user: UserInterfce = {
//   name: "Jack"
// }
// const result  = addId<string>(user);
// console.log(result);
//====================
//          8.1  
//Generics for Interface
//====================
// const addId = <T extends object> (obj: T) => {
//   const id = Math.random().toString(16)
//   return {
//     ...obj,
//     id
//   }
// }
// interface UserInterface<T>  {
//   name: string;
//   data: T
// } 
// const user: UserInterface<{meta: string}> = {
//   name: "Jack",
//   data:{
//     meta: "kamaru"
//   }
// }
// const user2: UserInterface<string[]> = {
//   name: "Jack",
//   data:["foo", "bar"]
// }
// console.log(result);
//====================
//          8.2  
// Several Data Types
//====================
// const addId = <T extends object> (obj: T) => {
//   const id = Math.random().toString(16)
//   return {
//     ...obj,
//     id
//   }
// }
// interface UserInterface<T, V>  {
//   name: string;
//   data: T
//   meta: V
// } 
// const user: UserInterface<{meta: string}, string> = {
//   name: "Jack",
//   data:{
//     meta: "kamaru"
//   },
//   meta: "bar"
// }
// const user2: UserInterface<string[]> = {
//   name: "Jack",
//   data:["foo", "bar"]
// }
//====================
//          8.2  
// Generic in Libraries
//====================
// const updatedArray = append<string>("baz", ["foo", "bar"]);
// const searchStr = "foo";
// const hasSearchedString = any<string>((el:string) => el.includes(searchStr), [
//   "fooo",
//   "bar",
//   "baz"
// ])
//====================
//          9  
//         Enums
//====================
// const statuses = {
//   notStarted: 0,
//   inProgress: 1,
//   done: 2
// }
// console.log(statuses.notStarted)
// writing same code in Enumerables
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = Status.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(notStartedStatus);
