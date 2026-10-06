<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reusable Functions</title>
</head>
<body>

<script>

// 1. Grade Calculator
function gradeCalculator(mark) {
    if (mark >= 90) {
        return "A Grade";
    } else if (mark >= 80) {
        return "B Grade";
    } else if (mark >= 70) {
        return "C Grade";
    } else if (mark >= 60) {
        return "D Grade";
    } else {
        return "F Grade";
    }
}

console.log(gradeCalculator(95));
console.log(gradeCalculator(75));


// 2. Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false


// 3. Leap Year Check
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2025)); // false

</script>

</body>
</html>