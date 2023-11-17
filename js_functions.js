//Write a function addN that takes a number n and 
//returns another function that takes a number x and 
//returns x+n. For example, calling addN(2)(3) should return 5.
function f1(n,x) {return x+n;}
function addN(n,x) {
    return f1(n,x);
}
console.log(addN(2,3));


//1
const foo1= (str) => str.toLowerCase();

console.log(foo1("HELLO"));

//2
//Write an arrow function that takes a string prefix and returns another function that prepends prefix to its parameter.
//I don't really understand where the parameter is supposed to come from
const prepender = (prefix, string) => {return prefix + string;}
const foo2 = (prefix, string) => {return prepender(prefix, string)}

console.log(foo2("re", "do"));

//3
//Write an arrow function that takes a string prefix and returns a function that takes a string postfix that returns another function that takes a string and returns correctly prepends/appends the pre/postfix to its parameter.
//im confused on what the parameters should be.
function str(string) {
    return prefix + string, string + postfix;
}

function post(postfix) {
    return str(string);
}

const foo3 = (prefix, postfix, string) => {
    return post(postfix);
}

console.log(foo3("he","rsh","ey"));

//4
//Write a function that maps number grades to letter grades
//A is 89.5-100, B is [79.5-89.5), C is [69.5-79.5), D is [59.5-69.5), and F is [0-59.49).

function converter(grade) {
    if (grade >= 89.5){
        return "A";
    }
    else if (grade >= 79.5 && grade < 89.5) {
        return "B";
    }
    else if (grade >= 69.5 && grade < 79.5){
        return "C";
    }
    else if (grade >= 59.5 && grade < 69.5){
        return "D";
    }
    else {
        return "F";
    }
    }

    console.log(converter("78"));

//5

let arrays = [[1, 2, 3], [4, 5], [6]];
function flat(array) {
    return array.reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue), []);
}

console.log(flat(arrays));

//6
const initalValue=0;
function every(array, test) {
    const addition = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue);
    if (addition =! test) {
        return False;
    }
    else {
        return true;
    }
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true