

// let a = " type ";
// console.log(a.replace(" ","script"));


// function sumTwoNumbers(a: number , b: number): number;
// function sumTwoNumbers(a: string , b: string): string;
// function sumTwoNumbers(a: number | string , b: number | string) : number | string {
//     if (typeof a === 'string' && typeof b === 'string'){
//         return a + b;
//     }
//     else if (typeof a === 'number' && typeof b === 'number'){
//         return a+b;
//     }
//     throw new Error("Invalid Value type");
// }
// console.log(sumTwoNumbers(1,2));
// console.log(sumTwoNumbers("Yousra" , "Khan"));

// function num(a: string, b: string) {
//     return a + b

// }  
// let result = num("Hello " , "World") // hello k baad difference aya hy
// console.log(result);

// function num(a: string, b: string) {
//     return a + b

// }  
// let result = num("Hello" , "World")
// console.log(result);

// const a = 7 ;
// const b = "seven" ;
// const c :string = "seven"

// if (true) {
//     let h = 7 ;
// }
// else {
//     let h ="string" ;
// }
// console.log("let " , + h) ; // error

// const a = 5;

// console.log(a) ;

// if (true){
//     let a = 8 ;

// }
// console.log(a); // error

// let x : string ;
// x = "Hello , TypeScript" ;
// console.log(x) ;


// const b : number = 33 ;
// b = 44 ;

// let response : number [] = [1 , 2 , 3 , 4 , 5 , 6 , 7  , 8 , 9 ]
// let response2 = response.slice(4, 10);
// console.log(response2) ;
// let response3 = response2.slice(2)
// console.log(response3) ;

// let number: number[][] = [[45 , 88 , 89 , 76] , [23 ,33] , [23 , 22]] ;
// console.log(number[0][1]);
// console.log(number.length) ;

// let newarray2 = number[1][2]
// console.log(newarray2) ;


// import inquirer from "inquirer";

// let answers = await inquirer.prompt(
//     [
//         {
//             name: "age" , 
//             type: "number",
//             message: "Enter your age:"

//         }
//     ]
// );
// console.log("Inn sha Allah, in " + (60 - answers.age) + "Years you will be 60 years old");

//  function greet1(name:string?) {  // parameter check
//      return "Hello, " + name; 
//  } // error

//  function greet2(name?:string){
//     return "Hello, " + name;
// } // correc tway

// function greet3(name: string = "") {
//     return "Hello, " + name;
// }

//  import inquirer from 'inquirer' ;
// let question = [

// {
//     type: 'list',
//     name: 'question4',
//     message: 'Which element has the chemical symbol O?',
//     choices: ['Gold', 'Oxygen', 'Silver', 'Iron']
//   }
// ]

// console.log(question);



// function printValue (value: number | string) : any {
//  if (typeof value === "number") {
//     return value ;
//  } 
//  else {
//     return value.toLocaleUpperCase();
//  }

// }
// console.log(printValue(42)); // 42


// function printId (id: number | string){
//     if(typeof id === "string"){
//         console.log(id.toUpperCase());
//     }
//     else{
//         console.log(id)
//     }
// }
// printId("hello");


// let myname :  string | null
// myname = null
// console.log(myname); // null

// myname = "yousra";
// console.log(myname);// yousra


// let myAge : string |number
// myAge=22;
// console.log(myAge); // 22

// myAge="Yousra";
// console.log(myAge.toLowerCase());//yousra





// let age : number | "died" | "unknown"
// age = 22 ;
// console.log(age) // 22

// age = "died";
// console.log(age); // died

// age = "unknown"
// console.log(age); // unknown

// age = "string" // error

// let message: string= "Hello";
// console.log(typeof message);


// let a 
// if(a){
//     console.log("You have entered in the if block");

// };


// let sum = 0 ;
// for (let i = 0 ; i<=3 ; i++){
//     sum += i;
// }
// console.log(sum); // 6

// function greet (name: string = "Guest"){
//     return`Hello, ${name}`;
// }
// console.log(greet());

// let user : [string ,number] = ['Yousra' , 45]; // tuples


// let user: [string, number] = (['Alice', 25]);

// console.log(a);
// var a= 5;

// let object;
// console.log(object.property); // error

// interface ColourFul {
//     colour: string;
// }
// interface Shirt {
//     size: number;
// }
// type ColourFulShirt = ColourFul & Shirt ;

// let bag = {
//     colour : "black",
//     capacity : "large"
// }
// console.log(bag.capacity);
// console.log(bag["colour"]);

// let bag : {
//     newProperty: string[];
//     colour : string,
//     capacity : number
// }
// bag = {
//     colour : "black",
//     capacity : 50,
//     newProperty: ["big"]
// }
// console.log(bag.capacity);
// console.log(bag["colour"]);
// console.log(bag["newProperty"]);



// let teacher : {
//     name: string,
//     experience: number
// }={
//     name:"Sir hamza alvi",
//     experience: 3
// }
// console.log(teacher.experience);


// interface Person {
//     name: string,
//     age: number
// }
// function greet(prrson:Person){
//     return "hello" + prrson.age
// }
// console.log(greet);


// type Person={
//     name: string;
//     age:number;
// }
// function greet(person:Person){
//     return "hello" + person.name
// }
// console.log(greet);


// interface Pet {
//     name: string;
//   }
//   class Dog {
//     name: string;
//   }
//   let pet: Pet;
//   // OK, because of structural typing
//   pet = new Dog();

// let x:[string, number]=["hello" , 10];
// console.log(x[0].substring(1));

// let obj1 = { a: 1, b: 2 };
// let obj2 = obj1;
// obj2.a = 3;
// console.log(obj1.a);


// interface Person {
//     name: string;
//     age: number;
//     details?: {
//       address: string;
//       phone: string;
//     };
//   }


// type A = { a: number };
// type B = { b: string };
// type C = A & B;
// const obj: C = { a: 10, b: "hello" };
// console.log(obj);

// enum Color {Blue , Red , Black}
// let c : Color.Black ;
// console.log(Color);

// enum Color1 {Blue = 1 , Red , Black} ;
// let colorName: string = Color1[2];
// console.log(colorName);

// enum Color2 {Blue = 1 , Red = 2 , Black = 6};
// let colorIndex = Color2["Blue"];
// console.log(colorIndex);

// let alphabets_1:string[]=["y" , "o" , "u" , "s" , "r" , "a"];
// let alphabets_2:string[]= ["h" , "a" , "s" , "s" , "a" , "n"];
//console.log(alphabets.indexOf('c') !== -1); 
//console.log("last index of c before :",alphabets.lastIndexOf('c'));
//console.log("last index of c after  :",alphabets.lastIndexOf('c'));

// console.log("result:",alphabets_1.concat(alphabets_2));

// let number:number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7];
// console.log(number.slice(2,5));



// let arr1=["abc" , "hyk"];
// console.log("Array 1" , arr1);


// let arr2=newArray("abc","hyk");
// console.log("array2" , arr2);


// let arr3 = Array.of("abc" , "hyk")
// console.log(arr3);

// function student(fn:(uzma:string)=>void){
//     return("Hello Yousra");
// }

// function parent(s:string){
//     console.log(parent);

// }

// let sum = 0;
// for (let i = 0; i<5;i++){
//     sum +=i;
// }
// console.log(sum);

// let count:number=5;
// let result:string=typeof count ==="number"? count.toString():"NaN";
// console.log(result);


// let number:number[]=[1, 2, 3];
// for(let i =0; number.length<=3; i++){
// console.log(number[i]);
// }

// function newArray(arg0: string, arg1: string) {
//     throw new Error("Function not implemented.");
// }


// const add = (a:number , b:number):number=>a+b
// console.log(add(2,3));

// for (let i = 0; i<5;i++){
//     console.log(i);
// }

// let y = 0;
// while(y<9){
//     console.log(y);
//     y++;
// }

// let h=0;
// do{
//    console.log(h);
//    h++
// }while(h=8);


// type NumberArray=number[];
// const numbers: NumberArray=[1,2,3];
// function printNumbers(arr:NumberArray):void{
//     for(const num of arr){
//         console.log(num);

//     }
// }
// printNumbers(numbers);


// let scores:(number| string)[]=[10,"twenty",30];
// let total=scores.reduce((sum,score)=>sum+Number(score),0);
// console.log(total); // error

// function greet():Promise<string>{return new Promise(resolve=>resolve("Hello"))};
// console.log(greet);

// let value:unknown=67;
// let result:boolean=(value as string).startsWith("4"); 
// console.log(value,result); // run time error 

//correct code of above:
// let value:unknown=67;
// let result:boolean=false;
// if(typeof value === 'string'){
// result = value.startsWith("4");
// }
// else{
//     console.log("value is not string.");

// }
// console.log(value,result);


// let data:unknown="hello";
// let length:number=data.length; // error


// write a function that returns a promise which resolves with the square of a number//

//  function square(num:number):Promise<number>{return new Promise(resolve=>resolve(num*num))}
//  square(5).then(result=>console.log(result)); // 25

// type Point={x:number,y:number};
// const point:Point={x:20,y:90};
// console.log(point.z);


//write a function getOddNumbers that takes an array of numbers and returns an array containing only the odd numbers
// function getOddNumbers(numbers:any){
//     return numbers.filter(number => number % 2 !==0);
// }
// const NumbersArray = [1, 2, 3 , 4 , 5];
// const oddNumbers = getOddNumbers(NumbersArray);
// console.log(oddNumbers);

// const a: number=5;
// const b: string="10";
// console.log(a-b);

// let x: number | string = '42';
// console.log(x);

// let x: number = 5; 
//  let result: string = (x > 3) ? "Greater" : "Smaller"; 
//  console.log(result)


// let a = true; 
//  let b = !a; 
//  console.log(a);


// let a : number = 5;
// let b : number = 2;
// let c : number;
// //  6   +  7  +  1  +  0  + 7 +  1  + 0
// c = ++a + a++ + --b + b-- + a + b++ + b ;
// console.log(c);

// let isHungry = false;
// let snack = isHungry ? "pizza" : "chocolate";
// console.log(snack);


// function halfFryEgg(){
//     let cooked = 1+1+1;
//     console.log(cooked);
// }
// halfFryEgg()



// function tea():number{
//     let cookedd = 2+2;
//     return cookedd;
// }
// let response: number= tea()
// console.log(response);



// function pasta(chicken:number , oil:number , souces:number):number{
//     return chicken +oil +souces;
// }
// let response2:number= pasta(2,3,1)
// console.log(response2);



// function mangoShake(milk:number=2 , mango:number=2 ,sugar:number=3):number{
//     return milk + mango + sugar;
// }
// let response3:number=mangoShake()
// console.log(response3);


// function boilRice(rice:number=1 , ...ingredients:number[]){
//     console.log(rice);
//     console.log(ingredients);
// }
// boilRice(3 , 1.5, 2,5)



// function orangeJuice(orange:number=5 , ...ingredients:number[]){
//     console.log(orange);
//     console.log(...ingredients);
// }
// orangeJuice(1 , 4);


// let dateShake = ()=> 2+5+7;
// let response:number=dateShake()
// console.log(response);

// let vigoDala=(color: string, model: string,):string=>(
//     color+model
// )
// let response:string=vigoDala("black", "latest");
// console.log(response);


// let strawBerry=()=>{return 1+4-8};
// let response:number=strawBerry()
// console.log(response);

// let beefBiryani=(rice:number , beef:number):number=>{
//     let cooked = rice+ beef;
//     return cooked;
// }
// let response:number= beefBiryani(4,6);
// console.log(response);


// let globalVar = "Acessible everywhere";
// function showExample(){
//     let localVar = "Acessible only inside this function";
//     console.log(localVar);
// }
// console.log(localVar);// error


// function countDown (number:number):void{
//     if(number<=0){
//         console.log("done");
//         return;
//     }
//     console.log(number);
//     countDown(number-1);
// }
// countDown(6);


// function factorial(n:number):number{
//     if(n===0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// let response=factorial(5);
// console.log(response);



// function outerFunction(){
//     const innerFunction=function(){
//         console.log("hello from inside!");
//     }
//     innerFunction()
// }
// outerFunction();

// function inputUser(callBack:any){
//     let name="Yousra Khan";
//     callBack(name);
// }
// inputUser(function(name:string){
//     console.log("hello, "+ name);
//     });


// function processUserInput(callBack:(name:string)=>void){
//     let name='yousra';
//     callBack(name)
// }
// processUserInput(function(name:string){
//     console.log('hello, ' +name);

// });

// setTimeout(()=>{
//     console.log("sandWich is ready!");
// },2000);

// function calculateProduct(num1: number , num2:number):number{
//     return num1 * num2 ;
// }
// let result= calculateProduct(2,4);
// console.log(result);


// let fruits: string[] = ["apple" , "banana" , "cherry" , "mango"];
// fruits.push("orange");
// fruits.shift();
// fruits.unshift("strawberry");
// console.log(fruits);


// let number:number[]=[3 , 5 , 6 , 8 , 9 , 4];
// let squareedNumbers = number.map(num => num*num);
// console.log('Squared Numbers:' , squareedNumbers);
// let filteredNumbers = squareedNumbers.filter(num=>num <= 50);
// console.log('Filtered Numbers(<=50):' ,filteredNumbers);
// let sumOfFilteredNumbers = filteredNumbers.reduce((total,num)=>total+num,0);
// console.log('Sum of Filtered Numbers:',squareedNumbers);

// let students = [
//     {
//     name: "Yousra",
//     id: 1,
//     grades: [90, 88, 89]
// },
// {
//     name: "Uzma",
//     id: 2,
//     grades: [99, 86, 86]
// },
// ];
// function calculateAverageGrades(students: any[]){
//     return students.map(student=>{
//        let total = student.grades.reduce((sum: any,grade: any)=>sum+grade,0);
//        let average=total/student.grades.length;
//        student.averageGrade = average;
//        return student;
//     });
// }
// let updatedStudents=calculateAverageGrades(students);
// console.log(updatedStudents);


// let coffeeOrder:[string,string]=["tea" , "hot coffee"];
// console.log(coffeeOrder);


// let billgates=5;
// while(billgates>0){
//     console.log(`BillGates reached in ${billgates} minutes`);
//     billgates--;
    
// }




// let markZuckerberg = 6;
// do{
//     console.log("markZuckerberg is waiting...");
//     markZuckerberg--;
    
// }while(markZuckerberg>0);




// let AdamMosseri = 4;
// function waitingForMarkZuckerberg(){
//     AdamMosseri--;
//     if(AdamMosseri !=0){
//         return "Waitng for markZuckerberg..."
//     }
//     else{
//         return false
//     }
// }
// do{
//     let response = waitingForMarkZuckerberg()
//     console.log(response);

// }while(AdamMosseri>0);



// for(let i = 0; i<6;i++){
//     console.log(`plants ${i+1}`);
    
// }


// let  father:any={
//     sonName:"Ali",
//     DoughterName:"Yousra",
//     city: "karachi"
// }
// for(let key in father){
//     console.log(`${key}:${father[key]}`);
    
// }


// let flavors:string[]=["chocolate" , "vanilla"];
// for(let flavor of flavors){
//     console.log(flavor);
    
// }


// let favoriteMovies = ["Barbie inthe pink shoes","ice Age"];
// function printMovies(movies:string[]){
//     for(let movie of movies){
//         console.log(movie);
        
//     }
// }
// printMovies(favoriteMovies);




// let car ={
//     make:"Dala",
//     model:"latest",
//     year:2022,
// };
// function printCarDetails(car:{[key:string]:string|number}){
//     for (let key in car){
//         console.log(`${key}: ${car[key]}`);
        
//     }
// }
// printCarDetails(car);




// function fizzBuzz(){
//     for(let i = 1;i<=100;i++){
//         let output='';
//         if(i%3===0) output+='fizz';
//         if(i%5===0) output+='buzz';
//         console.log(output|| i);
        
//     }
// }fizzBuzz();


// function countDownnn(number:number){
//     while(number>=0){
//         console.log(number);
//         number--;
        
//     }
// }countDownnn(5);



// enum DaysOfWeek{
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
// function checkDay(Day:DaysOfWeek):string{
//     switch(Day){
//         case DaysOfWeek.Saturday:
//         case DaysOfWeek.Sunday:
//             return"Weekend";
//             default:
//                 return"Weekend";
//     }
// }
// console.log(checkDay(DaysOfWeek.Sunday));
// console.log(checkDay(DaysOfWeek.Wednesday));
// console.log(checkDay(DaysOfWeek.Friday));



// type RGB=[number , number , number];
// function describeColor(rgb:RGB):string{
//     const [r, g , b] = rgb;
//     return`the color is R:${r} , G:${g} , B:${b} `;
// }
// let color:RGB = [255 , 0 , 0];
// console.log((describeColor(color)));
// color=[0,255,0];
// console.log(describeColor(color));
// color=[0,0,255];
// console.log(describeColor(color));




// let tuple:[number,string,boolean];
// tuple=[23,"yousra",false];
// tuple.push("hassan");
// console.log(tuple);



// const ourReadonlyTuple:readonly[number, string, boolean]=[5,"yoyo",false];
// //ourReadonlyTuple.push() // error




// let myTuple:[string,boolean,number]=["yoyo",true,20];
// console.log("Origional Tuple:", myTuple);
// let poppedElement=myTuple.pop();

// console.log("popped element:",poppedElement)
// console.log("typle after pop:",myTuple);




// let checkTuple:[string,number]=["hello",56];
// checkTuple[0]="world";
// console.log(checkTuple);



// // Can tuples be nested in TypeScript? If yes, how?
// // Yes, tuples can be nested in TypeScript. Here's an example:
// let nestedTuple:[string, [number, number], boolean] = ["hello", [1,2], true];
// console.log(nestedTuple);




// let greeting1=greet("Yousra");
// let greeting2=greet(["Khan","Abeera"]);

// function greet(person:string):string;
// function greet(people:string[]):string[];
// function greet(personOrPeople:any):any{
//     if(typeof personOrPeople=== "string"){
//         return `hello,${personOrPeople}`;
//     }else{
//         return personOrPeople.map((name:any)=>`hello,${name}`);
//     }
// }
// console.log(greeting1);
// console.log(greeting2);




// const greeting=(message:string)=>console.log(`hello${message}`);
// interface definitioninterface{
//     (message:string):void;
// }
// function sayHello(callBack:definitioninterface){
//     callBack('world')
// }
// sayHello(greeting);



// let numbers:number[]=[1,2,3,4,5];
// numbers[2]=6
// console.log(numbers);



// let fruits = ["apple","banana","grapes","orange"];
// console.log(fruits.push("kivi"));
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits.push("kivi"));
// console.log(fruits.pop());
// console.log(fruits);


// function myCallBack(text:string){
//     console.log("hello callback"+text);
// }
// function callingFunction(initialText:string,callBack:(text:string)=>void){
//     myCallBack(initialText);
// }
// callingFunction("myText abc",myCallBack);


// function student(name:string,callBack:(message:string)=>void){
//     let message=`hello,${name}`;
//     callBack(message);
// }
// student("Yousra",(message)=>{
//     console.log(message);
// });

// function calculate(a:number,b:number,callBack:(result:number)=>void){
//     let result= a+b;
//     callBack(result);
// }
// calculate(5,9,(result)=>{
//     console.log(result);
    
// });


// setTimeout(function(){
//     console.log('i m n async func');
// });
// console.log('test 1');

// for(let i=0; i<10000; i++){
//     doSomeStuff();
// }
// console.log('test 2');
// function doSomeStuff(){
//     return 1+1;
// }


// let myPromise=new Promise((resolve,reject)=>{
//     console.log("promise pending");
//     setTimeout(()=>{
//         let data=["Yousra","Khan"];
//         if(data){
//             console.log("promise resolved");
//             return resolve(data)
            
//         }
//         else{
//             console.log("promise rejected");
//             return reject(new Error("data fetch failed"))
            
//         }
//         // console.log("promise resolved");
//         // resolve(["Yousra","Khan"])
//         // console.log("promise rejected");
//         // reject(new Error("Data fetch failed"))
//     },2000);
    
// })
// myPromise.then((response)=>(console.log(response))).catch((error)=>console.log("fetch not dected"));


// let promise=new Promise((resolve,reject)=>{
//     reject("error occured");
// });
// promise.then((message)=>{
//     console.log("success "+ message);
// }).catch((error)=>{
//     console.log("failed "+ error);
// });    


// let promise=new Promise((resolve,reject)=>{
//     resolve("success");
// });
// promise.finally(()=>{
//     console.log(("finally block executed"));
// }).then((message)=>{
//     console.log(message);
    
// });

// let named =(a:string)=>{
//     return a;
// }
// let name=named("sania kanwal");
// console.log(name);


// function average(...numbers:number[]):number{
//     let total=0;
//     for(let num of numbers){
//         total+=num;
//     }
//     return numbers.length===0?0:total/numbers.length;
// }
// console.log("average of the given numbers is:",average(10,20,30,40,60));
// console.log("average of the given numbers is:",average(5,6));
// console.log("average of the given numbers is:",average(4));

// let a:number=5;
// let b:number=2;
// const c:number= --a + b++ * a++ ;
// console.log(a+b+c);

// function buildName(firstName:string,lastName="khan"):string{
//     if(lastName)
//         return firstName+""+lastName;
//     else
//     return firstName;
// }
// let result1=buildName("Yoyo");
// let result2=buildName("Yoyo","khan");
// let result3=buildName("Yoyo","khan");
// console.log(result1,result2,result3);


let myFunction :(a:number,b:number)=> number = function(a:number,b:number):number{
    return a+b;
};