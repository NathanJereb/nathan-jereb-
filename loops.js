/*

for(control; comndition) {
//code
}

*/ 

for(let i=1; i<=10; i++) {
    console.log("loop " + i);
}


let correct = "password";
let password;

while(password != correct) {
    password = prompt("enter the password");
}
alert("you are logged in");