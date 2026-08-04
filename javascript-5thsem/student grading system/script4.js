function calculateGrade() {

    let name = document.getElementById("name").value;

    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);

    if(name=="" || english<0 || maths<0 || science<0 ||
       english>100 || maths>100 || science>100){

        document.getElementById("result").innerHTML =
        "<h3>Please enter valid details.</h3>";

        return;
    }

    let total = english + maths + science;
    let average = total / 3;

    let grade;

    if (average >= 50 && average < 66) {
    grade = "C";
}
else if (average >= 66 && average < 81) {
    grade = "B";
}
else if (average >= 81 && average <= 90) {
    grade = "A";
}
else if (average > 90) {
    grade = "A+";
}
else {
    grade = "Fail";
}

    document.getElementById("result").innerHTML = `
        <h2>Result</h2>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>English:</strong> ${english}</p>
        <p><strong>Maths:</strong> ${maths}</p>
        <p><strong>Science:</strong> ${science}</p>
        <p><strong>Total Marks:</strong> ${total}/300</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}