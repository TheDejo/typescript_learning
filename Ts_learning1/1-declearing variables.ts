let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

//one way of defining arrays
// let strArr: string[];
// let numArr: number[];
// let bolArr: boolean[];

//another way
let strArr: Array<string>;
let numArr: Array<number>;
let bolArr: Array<boolean>;

myString = 'Hello World'.slice(0, 3);
myNum = 1;
myBool = false;
myVar = true

strArr = ['Hello', 'world']
numArr = [1, 2, 3]
bolArr =[true, true, false]

console.log(myString)