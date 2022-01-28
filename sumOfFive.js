var myArray = []
for (var i = 1; i < 101; i++) {
    myArray.push(i)
}



function divisibles(i) {
    let numbers = myArray.filter(div)
    return (numbers);

    function div(divisibles) {
        return divisibles % 5 == 0;
    }
}

function total(array) {
    let sum = (previousValue, currentValue) => previousValue + currentValue;
    return myArray.reduce(sum)
}
console.log(total(divisibles()))