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

