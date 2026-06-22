function calculateAge(event) {
    event.preventDefault(); // stop form refresh

    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);

    let today = new Date();

    let age = today.getFullYear() - year;

    // Adjust age if birthday hasn't occurred yet this year
    if (
        today.getMonth() + 1 < month ||
        (today.getMonth() + 1 === month && today.getDate() < day)
    ) {
        age--;
    }

    document.getElementById("result").innerHTML =
        "Your Age is: " + age + " years";
}