function age() {
    const day = parseInt(document.getElementById("date").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month <= 0 || month > 12 || year <= 0) {
        alert("Please enter a valid date of birth with positive numbers...");
        return;
    }

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        daysInMonth[1] = 29;
    }

    if (day > daysInMonth[month - 1]) {
        alert("Please enter a valid day for the given month and year...");
        return;
    }

    const date = new Date();
    let currentDay = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();

    if (day > currentDay) {
        currentDay += daysInMonth[currentMonth - 1];
        currentMonth -= 1;
    }

    if (month > currentMonth) {
        currentMonth += 12;
        currentYear -= 1;
    }

    const d = currentDay - day;
    const m = currentMonth - month;
    const y = currentYear - year;

    document.getElementById("age").innerHTML = 
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}