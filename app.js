// Chapter 21 (Changing Case)----------------

// Q1-------------

// var allLower = userInput.toLowerCase();

// Q2-------------

// x = x.toLowerCase();

// Q3--------------

// y = y.toUpperCase();

// Q4-------------

// var str = "Hello World!";

// var lowerStr = str.toLowerCase();

// console.log(lowerStr);

// Q5------------

// var arr = ["abc" ,"xyz"];

// var userInput=prompt("Enter your name");

// var lowerStr = userInput.toLowerCase();

//  console.log(lowerStr);

// Q6------------

// var str = "Hello World!";

// var strCase = str.toLowerCase();

// alert(strCase);

// Q7------------ 

//  var cityName = "kaRacHi";

//  var firstChar = cityName.slice(0,1).toUpperCase();

//  var remainingChar = cityName.slice(1).toLowerCase();

//  var capitalizedName = firstChar + remainingChar;

//  alert(capitalizedName);

// Chapter 22 - 25 (Strings)------------------

// Q1--------------

// var sameWords = "captain";

// var otherWord = sameWords.slice(1,3);

// console.log(sameWords);

// Q2-----------

// var str = "Hello World!";

// var strAll = str.length;

// alert(strAll);

// Q3--------------

// var animal = "elephant";

// var seg = animal.slice(2,6);

// alert(seg);

// Q4------------

// var str = "Hello World!";

// var strAll = str.length;

// alert("Number of characters in string is: " + strAll);

// Q5-----------

// var str = "Welcome Page";

// var strAll = str.length;

//  var seg = str.slice(1,9);

// console.log(strAll);

//   console.log(seg);

// Q6-----------------

// The value of indx is 3-------

// Q7-------------

// The value of index is 16----------

// Q8------------

// var text = "Let's go";

// var indx = text.lastIndexOf("go");

// console.log(indx);

// Q9------------

// if (indexNumber >= 0) {

// }

// Q10------------

// var str = "abcde";

// var charIndex2 = str.charAt(2);

// console.log(charIndex2);

// Q11-----------

// var text = "Welcome to Vanilla Javacript Page";

// var char10 = text.charAt(9);

// console.log(char10);

// Q12-------------

// var str = "Welcome to Vanilla Javacript Page";

// var x = str.charAt(str.length - 1);

// console.log(x);

// Q13------------

// var text = "Welcome to Vanilla Javacript Page";

// var char5 = text.charAt(4);

// console.log(char5);

// Q14-----------

// if (str.charAt(2) === "x") {

//   }

// Q15------------

// var reply = ("No , This is Example Text");

// for (var i = 0; i < reply.length; i++) {
//   if (reply.slice(i, i + 2) === "No") {
//     reply = reply.slice(0, i) + "Yes" + reply.slice(i + 2);
//   }
//    console.log(reply.slice(i, i + 3));
// }

// console.log(reply);

// Q16------------

// var str = "The number is 1";

// var newstr = str.replace("1" , "one");

// console.log(newstr);

// Q17------------

// var x = "an apple";

// var y = x.replace(/a/g, "z");

// console.log(y);

// Chapter 26 (Rounding Numbers)-----------

// Q1------------

// var number = Math.round(9.5);

// console.log(number);

// Q2-----------

// var origNum =3.3; 

// var roundNum = Math.ceil(origNum);

// console.log(roundNum);

// Q3------------

// var origNum =3.9; 

// var roundNum = Math.floor(origNum);

// console.log(roundNum);

// Q4-----------

// var origNum =3.3; 

//  var roundNum = Math.ceil(origNum);

//  console.log(roundNum);

//  Q5-----------

// var number = Math.round(0.5);

//  console.log(number);

// Chapter 27 (Random Numbers)-------------

// Q1------------

// var randomNumbers = Math.random() * 10;

// console.log(randomNumbers.toFixed());

// Q2------------

// var randomNumber = Math.random();

// console.log(randomNumber);

// Q3-----------

// var diceSides = 6;

// var diceRoll = Math.floor(Math.random() * diceSides) + 1;

// console.log("You rolled a " + diceRoll);

// Q4------------

// var randomValue = Math.random();

// var result = randomValue < 0.5 ? "Heads" : "Tails";

// console.log("The coin landed on: " + result);

// Chapter 28, 29 (Converting Strings)------------

// Q1-------------

// var str = "59";

// var number = Number(str);

// console.log(number);

// Q2------------

// var integers = "123";

// var num = Number(integers);

// console.log(num);

// Q3-------------

// var str = "3.14159"; 

// var floatValue = parseFloat(str);

// console.log(floatValue);

// Q4------------

// var str = "123";

// var num = Number(str);

// if (" " !== num) {

//   console.log("Number value: " + num);

// }
//  else {

//     console.log("Cannot convert to a number.");

// }

// Q5------------

// var number = 42;

// var newNum = String(number);

// console.log(newNum);

// Q6------------

// var num = 42;

// console.log(typeof num.toString());

// Q7-------------

// var decimalString = "3.26";

// var integerValue = parseInt(decimalString);

// console.log(integerValue); 

// Chapter 30 (Controlling the length of decimals)---------------

// Q1------------

// var num = 8.54197265349; 

// var newNum = num.toFixed(4);

// console.log(newNum); 

// Q2------------

// var num = 8.54197265349;

// num = Number(num.toFixed(2));

// console.log(num);

// Q3------------

// var num =  89.23456789;

// num = num.toFixed(2);

// num = String(num);

// if (num.toFixed(2) > 4 ) {
//     console.log(num);
// }

// Q4-----------

// var num = 2.5678432;

// alert(num.toFixed(2));

// alert(typeof num.toString());

