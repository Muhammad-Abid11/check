// var plan1 = {
//     name: "abid",
//     roll: 12,
//     class: "three",
// }
// console.log(plan1)


// ----------------------------x----------------------

//constructor

// function Intro(user, roll, classes) {

//     this.name = user;
//     this.roll = roll;
//     this.class = classes;
// }

//Objects

// for (i = 1; i <= 3; i++) {
//     console.log(intro(i));
// }

// var intro = [["Abid", 40, 3], ["sajid", 40, 3, 5], ["Umar", 60, 3]];

// for (var i = 0; i < intro.length; i++) {

//     for (var j = 0; j < intro[i].length; j++) {

//         console.log(intro[i][j]);
//     }

// }

// console.log(arr)

// ----------------------------x----------------------

// Search Word In a string 22*04*22


// var a = "Hi Peter";
// var b = a.search("Peter");//3
// var c = a.slice(b, a.length);//Peter


// ----------------------------x---------timer-------------

//  setInterval(function,time)
//  setTimeout(function,time)


//          counter


// var num = 0;
// var stopTimer;
// counter = () => {
//     console.log(num);
//     num++
// }

// stopTimer = setInterval(counter, 1000); // if we want to stop it clear it

// setTimeout(function () {
//     clearInterval(stopTimer)
// }, 5000)

//OR

// setTimeout(() => clearInterval(stopTimer), 5000) //arrowfucntion


// ----------------------------x---------timer_end-------------





// < !-- ----------Animation Progress rePeat Style------------------x---------------------- -->

/*


var num = 1;
var num2 = 1;
var stopTimer;
var h1 = document.getElementById("head1");
counter = () => {
    if (num < 31) {
        console.log(num);
        h1.innerHTML = num;
        num++;
    }
    else if (num = 30) {
        num = 31;
        h1.innerHTML = num2;
        h1.style.backgroundColor = "grey";
        num2++
    }
}

stopTimer = setInterval(counter, 500); // if we want to stop it clear it

setTimeout(function () {
    clearInterval(stopTimer)
}, 30000)

//OR

// setTimeout(() => clearInterval(stopTimer), 5000) //arrowfucntion


//  Difference Between Let and Var

*/  


/*for (var i=0;i<3;i++)
  {
    setTimeout(()=>{
      console.log("var ",i)
    },0.1)
  }

for (let j=0;j<3;j++)
  {
    setTimeout(()=>{
      console.log(j)
    },1)
  } 
  
  */




/* < !-- ----------BreakPoint-----Start-------------x---------------------- -->.*/


// var a = 3;
// for (var i = 0; i < 10; i++) {
//     // a += i;
//     // console.log(a += i)//assignment operator`
// }
// // https://www.w3schools.com/js/js_operators.asp



/* < !-- ----------BreakPoint-----End-------------x---------------------- -->.*/


/* < !-- ----------Search Large number-----Start-------------x---------------------- -->.*/


// function findMax() {
//     var i;
//     var max = -Infinity;    // here max having lowest value

//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             console.log(arguments[i], i);
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// document.getElementById("demo").innerHTML = findMax(11, 4, 5, 6, 10, 15);


/* < !-- ----------Search Large number-----End-------------x---------------------- -->.*/

/* < !-- ----------Play with div onclick -----start-------------x---------------------- --> */



// let div,
//     container = document.getElementById('container')
// for (let i = 0; i < 5; i++) {
//     div = document.createElement('div')
//     div.onclick = () => {
//         alert('This is box #' + i)
//     }
//     container.appendChild(div)
// }




/* < !-- ----------Play with div onclick -----end-------------x---------------------- --> */




/* < !-- ----------React if new logic and arrow function -----Start-------------x---------------------- --> */


// /* var lordify = function(firstName, land) {

//  if (!firstName) {
//  throw new Error('A firstName is required to lordify')
//  }

//  if (!land) {
//  throw new Error('A lord must have a land')
//  }

//  return `${firstName} of ${land}`
// } */
// // New
// var lordify = (firstName, land) => {

//     if (!firstName) {
//         throw new Error('A firstName is required to lordify')
//     }

//     if (!land) {
//         throw new Error('A lord must have a land')
//     }

//     return `${firstName} of ${land}`
// }


// console.log(lordify("", "Pak"));    //if 1 value pass it provide error



/* < !-- ----------React if new logic and arrow function -----end-------------x---------------------- --> */




/* < !-- ----------scope of normal/arrow function -----start book 28-------------x---------------------- --> */


// // must read

// var tahoe = {
//     resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
//     print: function () {
//         setTimeout(() => {
//             console.log(this.resorts.join())
//         }, 1000)
//     }
// }
// tahoe.print()


/* < !-- ----------scope of normal/arrow function -----end book 28-------------x---------------------- --> */



/* < !-- ----------Maths.min() -----start book 28-------------x---------------------- --> */

// console.log(Math.min(2, 3, 1))    //1
// console.log(Math.min(-2, -3, -1)) //-3
// const array1 = [9, 3, 5,]
// console.log(Math.min(...array1)) //3

/* < !-- ----------Maths.min() -----start book 28-------------x---------------------- --> */



/* < !-- ----------For in  -----start from Net-------------x---------------------- --> */
//  it work for object

// const object = { a: 1, b: 2, c: 3 };

// for (let props in object) {
//     console.log(`${props}: ${object[props]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


// let string = "code";

// for (let i in string) {
//     console.log(`${i} ${string[i]}`);
// }


/* < !-- ----------For in  -----End-------------x---------------------- --> */

/* < !-- ----------For Of  -----start-------------x---------------------- --> */

// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//     console.log(element);
// }

/* < !-- ----------For Of  -----End-------------x---------------------- --> */

/* < !-- ----------spread opeator ...  -----start-------------x---------------------- --> */

// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(numbers);     // array

// console.log(...numbers)     //array value

// console.log(sum(...numbers));   // array values pass

// // expected output: 6

// console.log(sum.apply(null, numbers));
// // expected output: 6


/* < !-- ----------spread opeator ...  -----end-------------x---------------------- --> */


/* < !-- ----------ternary operator (if else)  -----start-------------x---------------------- --> */

// var age = 26;
// var beverage = (age >= 21) ? "Beer" : "Juice";
// console.log(beverage)

/* < !-- ----------ternary operator (if else)  -----end-------------x---------------------- --> */


/* < !-- ----------Classes ES6 Book#40  -----Start-------------x---------------------- --> */


// class Claas1 {
//     constructor(destination, length) {
//         this.destination = destination
//         this.length = length
//     }
//     print() {
//         console.log(this.destination + " | " + this.length + " days")
//     }
// }
// var maui = new Claas1("Claas1 Mauia", 1);
// maui.print();

// //class1 and class2 both are consturctors
// //class2 use some property of class1 by using keyword
// //  1extends    super()

// class Claas2 extends Claas1 {

//     constructor(destination, length, array) {
//         super(destination, length)
//         this.array = array
//     }

//     print() {
//         super.print()
//         console.log(`Your new Claaas 2 array is ${this.array}`)
//     }
// }

// var Claas3 = new Claas2("Claas2", 2, [2, 4, 6]);
// Claas3.print();


/* < !-- ----------Classes ES6 Book#40  -----End-------------x---------------------- --> */


/* < !-- ----------Function in Object Book#46  -----Start-------------x---------------------- --> */

// const obj = {
//     message: "They can be added to objects like variables",
//     loge(message) {
//         console.log(message)
//     }
// }
// obj.loge(obj.message)


/* < !-- ----------Function in Object Book#46  -----End-------------x---------------------- --> */
