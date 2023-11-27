var list = [100,90,94,84];
list = list.concat([75,65,35]);

const newList = list.map((grade) => {
    if (grade >= 89.5){
        console.log("A");
    }
    else if (grade >= 79.5 && grade < 89.5) {
        console.log("B");
    }
    else if (grade >= 69.5 && grade < 79.5){
        console.log("C");
    }
    else if (grade >= 59.5 && grade < 69.5){
        console.log("D");
    }
    else {
        console.log("F");
    }
});
console.log(list);
console.log(newList);

//foreach
//map
//reduce

let arrays = [[1, 2, 3], [4, 5], [6]];

const flat = (arrays) => {
    return arrays.reduce((flattenedArray, currentArray) => {
        return flattenedArray.concat(currentArray);
    }, [])
}
console.log(flat(arrays));



function every(array, test) {
    // Your code here.
    return array.every((element) => test(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true