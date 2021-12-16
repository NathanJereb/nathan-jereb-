let numbers = [200, 1, 56, 54, 90]

function sorting(array) {
    let sorted = array.sort(
        function(a,b) {
            return a - b;
        }
    );
    console.log(sorted);
}

function addNumber(array,callBack){
    array.push(543);
    console.log(array);
    callBack(array);
}
addNumber(numbers,sorting);