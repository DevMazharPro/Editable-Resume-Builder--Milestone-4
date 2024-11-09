const form = document.querySelector("#resume-id") as HTMLFormElement;
const button = document.querySelector("button") as HTMLButtonElement;

interface PersonInfo {
  name: string;
  email: string;
  phone: string;
}
interface Education {
  school: string;
  degree: string;
  graduationYear: string;
}
interface Skills {
  skill: string;
  level: string;
}
interface WorkExperience {
  company: string;
  position: string;
  experience: number;
}

function generateResume() {
  const personInfo: PersonInfo = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    phone: (document.getElementById("phone") as HTMLInputElement).value,
  };
  const education: Education = {
    school: (document.getElementById("school") as HTMLInputElement).value,
    degree: (document.getElementById("degree") as HTMLInputElement).value,
    graduationYear: (
      document.getElementById("graduation-year") as HTMLInputElement
    ).value,
  };
  const skills: Skills = {
    skill: (document.getElementById("skill") as HTMLInputElement).value,
    level: (document.getElementById("level") as HTMLInputElement).value,
  };

  const workExperience: WorkExperience = {
    company: (document.getElementById("company") as HTMLInputElement).value,
    position: (document.getElementById("position") as HTMLInputElement).value,
    experience: Number(
      (document.getElementById("experience") as HTMLInputElement).value
    ),
  };
  const resumeDisplay = document.querySelector(".resume-show") as HTMLElement;
  if (resumeDisplay) {
    resumeDisplay.innerHTML = `
      <h1>${personInfo.name}</h1>
      <h2>Email: ${personInfo.email}</h2>
      <h2>Phone: ${personInfo.phone}</h2>
      <h3>Education</h3>
      <ul>
        <li>${education.school}, ${education.degree} - Graduated ${education.graduationYear}</li>
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>${skills.skill} - ${skills.level}</li>
      </ul>
      <h3>Work Experience</h3>
      <ul>
        <li>${workExperience.company}, ${workExperience.position} - ${workExperience.experience} years experience</li>
      </ul>
    `;
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  generateResume();
});

export {};
