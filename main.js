//Qs 2:
let personNames = "Akhtar ali";
console.log('hello',personNames,"would you like to learn some typescript today");
//Qs 3:
let personName0 = "akhtar";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase);
console.log("akhtar\nAKHTAR\nAkhtar\n");
// Qs 4:
console.log("Audrey Hypburn once said",'"world IMPOSSIBLE it self says I am possible"');
//Qs 5:
let famousPerson ="Audrey Hypburn"
let message = "once said,'world IMPOSSIBLE it self says I am possible'";
console.log(famousPerson,message); 
//Qs 6:
let whiteSpace = "\n\t Akhtar Ali \t\n";
console.log(whiteSpace);
let withoutwhitespace = whiteSpace.trim();
console.log(withoutwhitespace);
//Qs 7: Qs 8:
console.log(4+4);
console.log(10-2);
console.log(2*4);
console.log(16/2);
// Qs 9:
 let favouriteNum = 6;
 console.log("my favourite number is",favouriteNum);
//Qs 10:
date: 26 may 24
let whiteSpace = "\n\t Akhtar Ali \t\n";// \n is used for new line \t is used for whiteSpace.
console.log(whiteSpace);
let withoutwhitespace = whiteSpace.trim();
 console.log(withoutwhitespace);
//Qs 11:
 let friendName =[ "Idrees", "Ibraheem" ,"Waqar","Hassnain"];
 console.log(friendName[0]);
 console.log(friendName[1]);
 console.log(friendName[2]);
 console.log(friendName[3]);
//Qs12:
let friendName =[ "Idrees", "Ibraheem" ,"Waqar","Hassnain"];
let message = " pls subscribe to my youtube channel  Akhtar tech art and craft";
 console.log('Hello',friendName[0],message);
 console.log('Hello',friendName[1],message);
 console.log('Hello',friendName[2],message);
 console.log('Hello',friendName[3],message);
// Qs 13:
let transportationMode = [ "Toyota Corolla","Land crusier prado","SUV"];
transportationMode.forEach((Mode)=>
console.log(`i would like to buy a ${Mode}`)
);
console.log(`but ${transportationMode[0]} is my Dream Car`);
//Qs 14:
let GuestList = [ "abdul rehman","Hussian","saziya"];
GuestList.forEach((invitation)=>
console.log(`"Hey  ${invitation},I,d love to catch up over dinner!
How about jioning me for adelicious meal this"sunday" at "7 PM" at "kababjee". let me know if you,re free!`)
);
//Qs 15 :
 let newGuestList = ["abdul rehman","Hussian", "saziya"];
 console.log(`${newGuestList[2]} is not coming`)
newGuestList.splice(1,1,"dua");
newGuestList.forEach((newinvitation)=>
console.log(`"Hey  ${newinvitation},I,d love to catch up over dinner!
How about jioning me for adelicious meal this"sunday" at "7 PM" at "kababjee". let me know if you,re free!`)
);
// Qs16:
let moreGuestList = ["urooj","fatima", "ali"];
 console.log(`${moreGuestList[2]} is not coming`)
 moreGuestList.splice(1,1,"sajid")
 console.log(`Hey everyone! we found a bigger dinner table. lets call `)
moreGuestList.unshift("raouf")
moreGuestList.push("usama")
let middlelist = Math.floor(moreGuestList.length/2);
moreGuestList.splice(middlelist,0,"amna"); 
moreGuestList.forEach((moreinvitation) =>
console.log(`Hey ${moreinvitation} I,d love to catch up over dinner!
 How about jioning me for adelicious meal this"sunday" at "7 PM" at "kababjee". let me know if you,re free!`)
); 
//QS 17:
 let ShrinkGuestList = ["urooj","fatima", "ali"];
 console.log(`${ShrinkGuestList[2]} is not coming`)
 ShrinkGuestList.splice(1,1,"sajid")
  console.log(`Hey everyone! we found a bigger dinner table. lets call `)
ShrinkGuestList.unshift("raouf")
 ShrinkGuestList.push("usama")
let middlist = Math.floor(ShrinkGuestList.length/2);
ShrinkGuestList.splice(middlist,0,"amna"); 
 ShrinkGuestList.forEach((Shrinkinvitation) =>
console.log(`Hey ${Shrinkinvitation} I,d love to catch up over dinner!
 How about jioning me for adelicious meal this"sunday" at "7 PM" at "kababjee". let me know if you,re free!`)
 ); 
 console.log("unfortunely, new dinner table wont arrive in time for the dinner, so  i have space only two guests for dinner")
 while(ShrinkGuestList.length > 2){
    let removeGuestlist = ShrinkGuestList.pop();
    console.log(`sorry,${removeGuestlist} i can,t invite you to dinner`)
 }
 console.log('invitation to tha last 2 guests');
 ShrinkGuestList.forEach(guestinvitation => console.log(`hey ${guestinvitation} you are still invited for dinner`));
 ShrinkGuestList.pop();
 ShrinkGuestList.pop();
console.log(ShrinkGuestList,"Empty list");
//QS 18:
//QS 18:
let plceToVisit : string[]= ["paris","italy","unitedkingdom","japan","rome"];
// prin in orignal array 
console.log("orignal order",plceToVisit);
console.log("Alphabetical order:",plceToVisit.slice().sort());
console.log("orignal order", plceToVisit);
console.log("reverse  order:",plceToVisit.slice().sort().reverse());
console.log("orignal order", plceToVisit);
console.log("reverse order changed ");
plceToVisit.reverse();
console.log(plceToVisit);
console.log("orignal order", plceToVisit.sort());
console.log(plceToVisit);
console.log("reverse alphabetical order changed",plceToVisit.sort().reverse());
console.log(plceToVisit);
//QS #19 
let ShrinkGuestList = ["urooj","fatima", "ali"];
 console.log(`${ShrinkGuestList[2]} is not coming`)
 ShrinkGuestList.splice(1,1,"sajid")
  console.log(`Hey everyone! we found a bigger dinner table. lets call `)
ShrinkGuestList.unshift("raouf")
 ShrinkGuestList.push("usama")
let middlist = Math.floor(ShrinkGuestList.length/2);
ShrinkGuestList.splice(middlist,0,"amna"); 
 ShrinkGuestList.forEach((Shrinkinvitation) =>
console.log(`Hey ${Shrinkinvitation} I,d love to catch up over dinner!
 How about jioning me for adelicious meal this"sunday" at "7 PM" at "kababjee". let me know if you,re free!`)
 ); 
 console.log("unfortunely, new dinner table wont arrive in time for the dinner, so  i have space only two guests for dinner")
 while(ShrinkGuestList.length > 2){
    let removeGuestlist = ShrinkGuestList.pop();
    console.log(`sorry,${removeGuestlist} i can,t invite you to dinner`)
 }
 console.log('invitation to tha last 2 guests');
 ShrinkGuestList.forEach(guestinvitation => console.log(`Dear ${guestinvitation} you are still invited for dinner`));
 ShrinkGuestList.pop();
 ShrinkGuestList.pop();
// empty list update
console.log(ShrinkGuestList,"Empty list");
//QS #20
 let countries :string[]=["usa","canada","france","germany", "swizerland"];
 // print a list of countries
 console.log("list of countries",countries.forEach(country => {
    console.log(country);
 }));
//Qs # 21
 let student ={
    name : "akhtar ali",
    rollnumber: 25,
    grades :[85 ,90 ,76]
 };
 console.log(student.name);
 // type interface
 interface student {
    name :string;
    rollnumber :number;
    grades : number;
 }
 // type innotation 
 let myvariable: string ="Hello"
 // type infers
  let secvariable  = 'world'
 // initial object 
 let personName = {
  name :"alone",
  age : 20,
  city: "punjab",
 }
 // updated property
 personName.age = 23;
 personName.city = "kashmir"
 //add new property 
  personName["gender"] = "male";
  console.log(personName);
  //type  any
  let myvariable :any;
  myvariable = 12;
  myvariable="string";
myvariable = true;
//QS # 21
let objectcontainingitems :{[key:string]:any}={
"mouse":{
    price: "1000",
    description : "high quility plane mouse ",
},
"keybord":{
    name : "Keyboard",
    price : "4000",
description : "fast processor  using two connections",
}
}
console.log(objectcontainingitems);
//QS # 22
intentional eror;
let intentionalError :number[]=[1, 2, 3, 4 , 5, ];
console.log(intentionalError[10]);
let intentionalErrors :number[]=[1, 2, 3, 4 , 5, ];
console.log(intentionalError[3]);
//QS # 23
// test 1
 let car = "subaru";
console.log("it car == subaru? i predict True. ");
console.log(car == "subaru");
// test 2
console.log("it car == 'toyota'? i predict False. ");
console.log(car == "toyota");
// test 3 
console.log("it car === 'subaru'? i predict True. ");
console.log(car === 'subaru');
 // test 4 
 console.log("it car === 'subaru'? i predict False. ");
 console.log(car === 'subaru');
// test 5
 console.log("is car .length > 0? i predict true ");
 console.log(car.length > 0);
 // test 6
 console.log("is car .length < 5 i predict False ");
 console.log(car.length < 5);
 // test 7
console.log("Is car.toUpperCase() === 'subaru' ? predict False");
console.log(car.toUpperCase() === 'subaru');
// test 8 
console.log("Is car.toUpperCase() === 'SUBARU' ? predict True");
console.log(car.toUpperCase() === 'SUBARU');
// test 9
console.log("Is car.toLowerCase() === 'subaru' ? predict True");
console.log(car.toLowerCase() === 'subaru');
// test 10 
 console.log("Is car . includes('u') I predict True ");
//  console.log(car.includes('u'));
// //Qs # 24
// testing one 
var string1 = 'hello';
var string2 = 'world';
console.log(string1 == string2); // false
console.log(string1 !== string2); // true
// test using the lower case function 
var toUpperCase = "HELLO";
var toLowerCase = "hello";
console.log(toUpperCase.toLowerCase() === toLowerCase); // true
// numerical tests involving  equality and inequality greater
// then and less then and greater then or equail to  and less then or equil to 
var number1 = 30;
var number2 = 40;
console.log(number1 === number2); // false 
console.log(number1 !== number2); // True
console.log(number1 > number2); // False
console.log(number1 < number2); // True
console.log(number1 >= number2); // False
console.log(number1 <= number2); // True
// tests using "and " and "or" opreator
var x = 10;
var y = 20;
var z = 30;
console.log(x < y && y < z); //true 
console.log(x > y || y < z); //true 
//test weather an item is in  a array 
var array1 = [1, 2, 3, 4, 5, 6];
var itemtofind = 4;
console.log(array1.indexOf(itemtofind) !== -1);
console.log(array1.indexOf(10) === -1);
