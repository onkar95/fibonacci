fibarray = [];
primearray = [];
function fibonacciNum(num) {
    var num1 = 1;
    var num2 = 1;
    var sum;
    // var i = 0;
    for (i = 0; i < num; i++) {

        fibarray[i] = num1;
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
}
function fibonacciPrime(arr) {
    const isPrime = (val) => {
        for (let i = 2; i <= val; i++) {
            if (val === 2 && !primearray.includes(val)) {
                primearray.push(val);
                break;
            }
            if (val % i === 0) {
                break;
            } else {
                if (!primearray.includes(val) && i >= val / 2) {
                    primearray.push(val);
                    break;
                }
            }

        }
    }
    arr.forEach(val => { isPrime(val) });

    console.log(primearray);
}

let count = 0;

function add() {
    const length = fibarray.length;
    const last = fibarray[length - 1]
    tableBody = document.getElementById("tableBody")
    let uiString = `<tr>
        <td>${count}</td>
        <td>${last}</td>
        <td>${fibarray}</td>
        <td>${primearray}</td>
    </tr>`;
    tableBody.innerHTML += uiString;
}

let saveForm = document.addEventListener("submit", submitForm)


function submitForm(a) {

    a.preventDefault();
    // alert("hjh")
    let number = document.getElementById("Number").value;
    if (number < 1) {
        alert("please enter number greater than 1")
        document.getElementById("Number").value = " ";

    } else {
        console.log(number);
        fibonacciNum(number)
        fibonacciPrime(fibarray)
        add(number);
        // showNum();
        count++
        fibarray = [];
        primearray = [];
        document.getElementById("Number").value = " ";

    }

    // number = "";



}

