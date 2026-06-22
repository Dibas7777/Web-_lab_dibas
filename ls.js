function findNumbers() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);

    let largest = a;
    let smallest = a;

    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }

    if (b < smallest) {
        smallest = b;
    }
    if (c < smallest) {
        smallest = c;
    }

    document.getElementById("result").innerHTML =
        "Largest Number = " + largest +
        "<br>Smallest Number = " + smallest;
}