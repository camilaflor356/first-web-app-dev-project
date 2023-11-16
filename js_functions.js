//1
const foo1= (str) => str.toLowerCase();

//2
function prepender(prefix, word) {return prefix+word;}
const foo2 = (prefix, word) => prepender(prefix,word);

//3
//Write an arrow function that takes a string prefix and 
//returns a function that takes a string postfix that returns 
//another function that takes a string and returns correctly 
//prepends/appends the pre/postfix to its parameter.

const foo3 = (prefix) => foo4(prefix,postfix);

function foo4(prefix,postfix) {foo5(prefix,postfix,string);}

function foo5(prefix,postfix,string) { 
    return prefix+string, string+postfix;
}
