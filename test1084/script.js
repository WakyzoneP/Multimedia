function addGrade(exam) {
    const gradeList = document.getElementById("grades_list");
    const element = document.createElement("li");
    const text = document.createTextNode(exam.subject + " - " + exam.grade);

    if (exam.grade < 5) element.style.color = "red";

    element.appendChild(text);
    gradeList.appendChild(element);
}

window.onload = () => {
    addGrade({
        subject: "POO",
        grade: 4,
    });

    const addButton = document.getElementById("add_button");
    

    addButton.onclick = () => {
        const subject = document.getElementById("subject_select").value;
        const grade = document.getElementById("grade_input").value;
        const exam = {
            subject,
            grade,
        };
        addGrade(exam);
    };

    // addButton.addEventListener("click", () => {
    //     const subject = document.getElementById("subject_select").value;
    //     const grade = document.getElementById("grade_input").value;
    //     const exam = {
    //         subject,
    //         grade,
    //     };
    //     addGrade(exam);
    // });

    document.addEventListener("click", (event) => {
        console.log(event.target.tagName)
        if (event.target.tagName == "LI") {
            const gradesList = document.getElementById("grades_list");
            gradesList.removeChild(event.target);
        }
    });
};
