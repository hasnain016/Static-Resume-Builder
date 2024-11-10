//  Get elements  by DOM !
const skillsSection = document.getElementById('skills-section') as HTMLElement;
const educationSection = document.querySelector('.education') as HTMLElement;
const workExperienceSection = document.querySelector('.work-experience') as HTMLElement;

const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const toggleEducationButton = document.getElementById('toggle-education') as HTMLButtonElement;
const toggleExperienceButton = document.getElementById('toggle-experience') as HTMLButtonElement;

// create Toggle function :
function toggleVisibility(element: HTMLElement) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Add Event listeners for buttons
toggleSkillsButton.addEventListener('click', () => toggleVisibility(skillsSection));
toggleEducationButton.addEventListener('click', () => toggleVisibility(educationSection));
toggleExperienceButton.addEventListener('click', () => toggleVisibility(workExperienceSection));