function calculateResult() {

    let name = document.getElementById("studentName").value;

    let maths = Number(document.getElementById("maths").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
    let computer = Number(document.getElementById("computer").value);
    let hindi = Number(document.getElementById("hindi").value);

    let marks = [maths, english, science, computer, hindi];

    if (name.trim() === "" || marks.some(m => !Number.isFinite(m)) ||
        marks.some(m => m < 0 || m > 100) ||
        marks.some(m => document.getElementById(
            ["maths", "english", "science", "computer", "hindi"][marks.indexOf(m)]
        ).value === "")) {

        document.getElementById("result").textContent =
            "Please enter valid details and marks (0-100).";
        return;
    }

    let total = maths + english + science + computer + hindi;

    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 75) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 45) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status = marks.every(m => m >= 33) ? "PASS" : "FAIL";

    document.getElementById("result").textContent =
        "Student: " + name +
        " | Total: " + total + "/500" +
        " | Percentage: " + percentage.toFixed(2) + "%" +
        " | Grade: " + grade +
        " | Result: " + status;
}