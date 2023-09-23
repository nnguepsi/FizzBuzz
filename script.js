let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
let result = "";

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result += "FizzBuzz, ";
    } else if (i % 3 === 0) {
        result += "Fizz, ";
    } else if (i % 5 === 0) {
        result += "Buzz, ";
    } else {
        result += i + ", ";
    }
}

// Remove the trailing comma and space from the result
result = result.slice(0, -2);

document.getElementById('numbers').innerHTML = result;

/*document.getElementById('numbers').innerHTML = answer; */
