import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {
  url;
  firstpart:"";
  lastpart:"";
   finalpart:any;
   addingpart:"";
   index;
   numbers;
a1;   

  constructor( private Service: ServiceService) { }

  submit(name)

  {

 this.url ="https://homedepot.wavefront.com/dashboards/Server_Windows_Live_Stat#_v01(g:(d:7200,ls:!f,s:1572614013,w:'2h'),p:(Host:))",

//  this.firstpart = this.url.substring(0,118)

this.firstpart = this.url.slice(0,118)
 console.log("firstpartt",this.firstpart);

 this.lastpart = this.url.substring(118)

 console.log("lastpart",this.lastpart);

 this.addingpart = name; 

 console.log("adding",this.addingpart);

 this.finalpart= this.firstpart + this.addingpart + this.lastpart;
 
 console.log("final",this.finalpart);

 const str = 'To be, or not to be, that is the question.';

 this.index=str.indexOf('be',4);

 console.log("index",this.index);

console.log(str.match('To be')); 

console.log(str.includes('question'));

console.log('ALPHABET'.toLowerCase());

console.log('alphabet'.toUpperCase());

var orig = '   foo  ';

console.log(orig.trim());

var x = new String('Hello world 123');

console.log(x.toString());

var d = new Date()

console.log(d.toString());

var str1 = 'To be, or not to be, that is the question.';

console.log(str1.startsWith('To be'));  
      
console.log(str1.startsWith('not to be'));  

var str3 = 'To be, or not to be, that is the question.';

console.log(str3.endsWith('question.')); // true
console.log(str3.endsWith('to be'));     // false
console.log(str3.endsWith('to be', 19));

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); 

console.log(fruits[index]); 

const items = ['item1', 'item2', 'item3'];

const copy = [];

 
 for (let i=0; i<items.length; i++) {

  console.log(copy.push(items[i])) ;
 }

// after
 items.forEach(function(item){

  console.log(copy.push(item));

 });

//  console.log(copy.push(item));
 console.log(Array.of(7));       // [7] 
 // [1, 2, 3]

 console.log(Array(7));          // array of 7 empty slots
  
 const letters = ['a', 'b', 'c'];
const  numbers: number[] = [1, 2, 3];

 console.log(letters.concat(this.numbers));
// letters.concat(this.numbers);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers1 = num1.concat(num2, num3);

console.log(numbers1);

var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}

console.log([12, 5, 8, 130, 44].every(x => x >= 10)); // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); 

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result)

const fruitss = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const indexx = fruitss.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3

console.log(fruitss[indexx]);


const arraySparse = [1,3,,7];
let numCallbackRuns = 0;

arraySparse.forEach(function(element){
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

console.log([1, 2, 3].includes(2));     // true
console.log([1, 2, 3].includes(4));

var array = [2, 9, 9];

console.log(array.indexOf(2));
     // 0
console.log(array.indexOf(7));

var kvArray = [{key: 1, value: 10}, 
  {key: 2, value: 20}, 
  {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
var rObj = {};
rObj[obj.key] = obj.value;
return rObj;
});

console.log(reformattedArray);

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); 

console.log(popped);

var sports = ['soccer', 'baseball'];

var total = sports.push('football', 'swimming');

console.log(sports); 

var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

var a = ['1', '2', '3', '4', '5']; 
var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

console.log(left);  
console.log(right);

const a1 = [1, 2, 3];

console.log(a1); 

a1.reverse(); 

console.log(a1);

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));


var shifted = myFish.shift(); 

console.log('myFish after:', myFish); 


console.log('Removed this element:', shifted); 

var fruits1 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
console.log(fruits1);
console.log(citrus);

console.log([2, 5, 8, 1, 4].some(x => x > 10)); //false
console.log([12, 5, 8, 1, 4].some(x => x > 10));

var arr = ['a', 'b', 'c', 'd', 'e'];

var iterator1 = arr.values();

for (let letter of iterator1) {
  console.log(letter);
}

var hello = 'Hello, ';

console.log(hello.concat('Kevin', '. Have a nice day.'));

var  greetList = ['Hello', ' ', 'Venkat', '!'];

"".concat(...greetList);

const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

//  let res = users.filter(it => it.group.includes('admin'));

//  let res =users.filter(s =>s.name.includes('Adam')); 

// // let res = users.filter(s => s.age.includes(34));

// // const listOfUserGroups = [...new Set(users.map(it => it.group))];

// const listOfUserGroups = [...new Set(users.map(it =>it.group))];

// console.log(listOfUserGroups);

const arrA = [1, 4, 3, 2];

const arrB = [5, 2, 6, 7, 1];

// a=arrA.filter(it => arrB.includes(it));

 this.a1=arrA.filter(it =>arrB.includes(it));
  
console.log(a1);




}

 
  ngOnInit() {

  }

}
