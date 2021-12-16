const car1 = {
    name: "ferrari",
    color: "red",
    price: 300000
}

const car2 = {
    name: "BMW",
    color: "gray",
    price: 53400
}

const car3 = {
    name: "Mustang",
    color: "blue",
    price: 27205
}
//car1.color= "green"
//console.log(car1.name, car1.color, car1.price);
//console.log(car1);

let carcollection = [
    car1,
    car2,
    car3
]

//console.log(carcollection)
carcollection.push(
    {
        name: "model 3",
        color: "white",
        price: "44000"
    }
);
console.log(carcollection)
