"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form = document.querySelector("#resume-id");
var button = document.querySelector("button");
function generateResume() {
    var personInfo = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };
    var education = {
        school: document.getElementById("school").value,
        degree: document.getElementById("degree").value,
        graduationYear: document.getElementById("graduation-year").value,
    };
    var skills = {
        skill: document.getElementById("skill").value,
        level: document.getElementById("level").value,
    };
    var workExperience = {
        company: document.getElementById("company").value,
        position: document.getElementById("position").value,
        experience: Number(document.getElementById("experience").value),
    };
    var resumeDisplay = document.querySelector(".resume-show");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = "\n      <h1>".concat(personInfo.name, "</h1>\n      <h2>Email: ").concat(personInfo.email, "</h2>\n      <h2>Phone: ").concat(personInfo.phone, "</h2>\n      <h3>Education</h3>\n      <ul>\n        <li>").concat(education.school, ", ").concat(education.degree, " - Graduated ").concat(education.graduationYear, "</li>\n      </ul>\n      <h3>Skills</h3>\n      <ul>\n        <li>").concat(skills.skill, " - ").concat(skills.level, "</li>\n      </ul>\n      <h3>Work Experience</h3>\n      <ul>\n        <li>").concat(workExperience.company, ", ").concat(workExperience.position, " - ").concat(workExperience.experience, " years experience</li>\n      </ul>\n    ");
    }
}
button.addEventListener("click", function (event) {
    event.preventDefault();
    generateResume();
});
