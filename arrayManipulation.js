
// object.slice(starting value, ending value)
let mylist = ["do dishes", "clean room", "take ot trash", "vaccum"];
let completed = mylist.slice(1,3);
console.log(completed);

// object.splice(starting index, ending index)
console.log(mylist);
mylist.splice(1,1, "laundry");
console.log(mylist);

// object.split(seporator, number of splits)
let stringnumbers = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
console.log(stringnumbers);

let splitnumbers = stringnumbers.split(",");
console.log(splitnumbers);
