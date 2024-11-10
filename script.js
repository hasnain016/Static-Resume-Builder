//  Get elements  by DOM !
var skillsSection = document.getElementById('skills-section');
var educationSection = document.querySelector('.education');
var workExperienceSection = document.querySelector('.work-experience');
var toggleSkillsButton = document.getElementById('toggle-skills');
var toggleEducationButton = document.getElementById('toggle-education');
var toggleExperienceButton = document.getElementById('toggle-experience');
// create Toggle function :
function toggleVisibility(element) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
// Add Event listeners for buttons
toggleSkillsButton.addEventListener('click', function () { return toggleVisibility(skillsSection); });
toggleEducationButton.addEventListener('click', function () { return toggleVisibility(educationSection); });
toggleExperienceButton.addEventListener('click', function () { return toggleVisibility(workExperienceSection); });
