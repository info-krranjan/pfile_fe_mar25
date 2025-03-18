function prime() {
    let num = parseInt(document.getElementById("number").value);
    
    if (isNaN(num)) {
        document.getElementById("output").value = "Please enter a valid number!";
        return;
    }

    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    let resultText = isPrime ? `${num} is a Prime Number` : `${num} is NOT a Prime Number`;
    document.getElementById("output").value = resultText; // Fixed output display
}
