let years = [1948, 1965, 2020, 1560, 2006, 2011, 2012]

function getGenZ(birthyear){
    if(birthyear >= 1997) {
        console.log(birthyear);
    }
}

const genz = years.filter(birthyear => getGenZ(birthyear));