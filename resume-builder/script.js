document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const linkedinInput = document.getElementById('linkedin');

    const addEducationBtn = document.getElementById('add-education');
    const educationList = document.getElementById('education-list');

    const addExperienceBtn = document.getElementById('add-experience');
    const experienceList = document.getElementById('experience-list');

    const addSkillBtn = document.getElementById('add-skill');
    const skillsList = document.getElementById('skills-list');

    const resumePreview = document.getElementById('resume-preview');
    const downloadPdfBtn = document.getElementById('download-pdf');

    const updatePreview = () => {
        let educationHTML = '';
        document.querySelectorAll('.education-entry').forEach(entry => {
            const school = entry.querySelector('input:nth-child(1)').value;
            const degree = entry.querySelector('input:nth-child(2)').value;
            const year = entry.querySelector('input:nth-child(3)').value;
            if (school || degree || year) {
                educationHTML += `<li>${degree} from ${school} (${year})</li>`;
            }
        });

        let experienceHTML = '';
        document.querySelectorAll('.experience-entry').forEach(entry => {
            const company = entry.querySelector('input:nth-child(1)').value;
            const title = entry.querySelector('input:nth-child(2)').value;
            const description = entry.querySelector('textarea').value;
            if (company || title || description) {
                experienceHTML += `
                    <div>
                        <h5>${title} at ${company}</h5>
                        <p>${description}</p>
                    </div>
                `;
            }
        });

        let skillsHTML = '';
        document.querySelectorAll('.skill-entry input').forEach(input => {
            if (input.value) {
                skillsHTML += `<li>${input.value}</li>`;
            }
        });

        resumePreview.innerHTML = `
            <div class="text-center">
                <h2>${nameInput.value}</h2>
                <p>${emailInput.value} | ${phoneInput.value} | ${linkedinInput.value}</p>
            </div>
            <hr>
            <div>
                <h4>Education</h4>
                <ul>${educationHTML}</ul>
            </div>
            <hr>
            <div>
                <h4>Work Experience</h4>
                ${experienceHTML}
            </div>
            <hr>
            <div>
                <h4>Skills</h4>
                <ul>${skillsHTML}</ul>
            </div>
        `;
    };

    addEducationBtn.addEventListener('click', () => {
        const newEntry = document.createElement('div');
        newEntry.className = 'education-entry mb-3';
        newEntry.innerHTML = `
            <input type="text" class="form-control mb-2" placeholder="School/University">
            <input type="text" class="form-control mb-2" placeholder="Degree/Certificate">
            <input type="text" class="form-control" placeholder="Year">
        `;
        educationList.appendChild(newEntry);
        newEntry.querySelectorAll('input').forEach(input => input.addEventListener('input', updatePreview));
    });

    addExperienceBtn.addEventListener('click', () => {
        const newEntry = document.createElement('div');
        newEntry.className = 'experience-entry mb-3';
        newEntry.innerHTML = `
            <input type="text" class="form-control mb-2" placeholder="Company">
            <input type="text" class="form-control mb-2" placeholder="Job Title">
            <textarea class="form-control" placeholder="Job Description"></textarea>
        `;
        experienceList.appendChild(newEntry);
        newEntry.querySelectorAll('input, textarea').forEach(input => input.addEventListener('input', updatePreview));
    });

    addSkillBtn.addEventListener('click', () => {
        const newEntry = document.createElement('div');
        newEntry.className = 'skill-entry mb-3';
        newEntry.innerHTML = '<input type="text" class="form-control" placeholder="e.g., JavaScript, Python, etc.">';
        skillsList.appendChild(newEntry);
        newEntry.querySelector('input').addEventListener('input', updatePreview);
    });

    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    downloadPdfBtn.addEventListener('click', () => {
        const element = resumePreview;
        const opt = {
            margin:       1,
            filename:     'resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });

    updatePreview();
});
