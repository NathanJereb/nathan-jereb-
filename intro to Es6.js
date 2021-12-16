//(function(arguments)){
// code
//}) (value of the arguments);

(function(sentence) {
let arrayofwords = sentence.split(" ");
console.log(arrayofwords);
}) ("hello world my name is Nathan!");

// let function = (argument) => {
// code
//};

let creatingLoops = (x) => {
    for (let i = 0; i < x; i++) {
          console.log(i);
     }
};

creatingLoops(20);