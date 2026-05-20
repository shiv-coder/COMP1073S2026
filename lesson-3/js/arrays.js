const output = document.querySelector('body p:nth-of-type(2)');
let array1 = [1,2,3,4];
console.log(typeof(array1));
console.log(array1[1]);
array1.length = 2;

//array[-1] = "Hello";
//Instead of above 
//Give me tha last item in array
console.log(array1.at(-2));
console.log(array1[-1]);

//arrays are compared by memory location not by contents
//[1,2]===[2,1]-->False

//empty arrays

let array2 =Array(3);//[__,__,__]//_ means nothing exists here

let array3 = [undefined,undefined,undefined];
console.log(array2[0]);
console.log(array3[0]);

//setting a huge index creates a huge array

const array4 =[];
array4[1000] = "hi";
console.log(array4.length);
console.log(array4);


const array5 =['c','s','f'];
console.log(array5.sort());
const array6 =[1,20,2];
console.log(array6.sort());


const array7 = [1,2];
array7.push(3);
console.log(Array.isArray(array7));
/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = ['string',25,true,[10,20,30]];
output.textContent = myArray;
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = myArray[2];
output.textContent = myArray[3][0];

// You can also change a particular element

// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */

output.textContent = myArray.length;
// In particular, looping through arrays
// for(let i=0; i<myArray.length;i++){
//     output.textContent +=', ' + myArray[i];
// }

myArray.forEach((i)=>{
    console.log(i);
})

// function add(a,b){
//     return a+b;
// }

// const add = (a,b) =>{
//     return a + b;
// }
// add(2,4);
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let origFive = 'Toronto Maple leafs, Chiocago Black Hawks, Detroiy Red Wings, Boston Bruins, Montreal Canadians';
console.log(origFive);
let origFiveArray = origFive.split(', ');
console.log(origFiveArray);

// Output one of the array items
output.textContent = origFiveArray[2];

// Output the last element of the array
output.textContent = origFiveArray[origFiveArray.length -1];

/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */

let origFiveString = origFiveArray.join(': ');
output.textContent = origFiveString;

let origFiveString2 = origFiveArray.toString();
output.textContent = origFiveString2;

/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */


// Adding one or more items to an array with push()
let origSevenArray = origFiveArray.push('Network Rangers','Philadelphia Flyers');
output.textContent = origFiveArray;

// If you would like to capture how many elements are in the array after you have edited it, then…

// Removing an item from an array with pop()
output.textContent = origFiveArray.pop();

// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
origSevenArray = origFiveArray.unshift('new Element');
output.textContent = origFiveArray;

origSevenArray = origFiveArray.shift();
output.textContent = origFiveArray;

//map: used to change each element and return a new array
let mappedArray = myArray.map(i=>String(i));
console.log(mappedArray);


//filter
//select specific ElementInternals, keep elements that match a condition//
let numbersOnly = myArray.filter(i => typeof i === "number");
console.log(numbersOnly);



//includes: checks if a value exists--returs false or true
console.log(myArray.includes(25));
console.log(myArray.includes(false));
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()

/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */