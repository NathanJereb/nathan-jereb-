var Name = 'Elizabeth';
var Name2 = 'ELIZABETH'
var Name3 = ['Joe', 'Patrick'];
var Name4 = ['Alex', 'Steve', 'Hank', 'Fred'];
function Greet(name){
    let greet = 'hello ' + Name;
    if (Name = null){
        return "Hello there!";
    }else{
        return greet}
        if (Name = Name2){
            let greet2 = 'HELLO ' + Name2;
            return greet2;
        }else{
            return greet;
        }
        if (Name = Name3){
            let greet3 = 'Hello ' + Name3[0] + 'and ' + Name3[1];
            return greet3;
        }else{
            return greet;
        }
        if (Name = Name4){
            let greet4 = 'Hello ' + Name4[0] + ', ' + Name4[1] + ', ' + Name4[2] + 'and, ' + Name4[3];
            return greet4
        }else{
            return greet;
        }
}

console.log(Greet());