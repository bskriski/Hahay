// Data CV Teri (Mudah Diubah)
const cvData = {
    header: {
        name: "Teri Triana Putra.",
        title: "",
        contact: "terytrianaputra7@email.com | (0831) 5498-3099 | "
    },
    summary: "Nama Saya Teri Triana Putra Saya Seorang Siswa Yang Berusia 16 Tahun Saya Adalah Orang Yang Memiliki Minat Terhadap Teknik Jaringan Komputer Dan Telekomunikasi.",
    skills: [
        "Dasar Html", "Jasa Joki", "Dasar CSS", "Komunikasi", 
        
    ],
    experience: [
        {
            title: "Hobi",
            company: "",
            period: "Bermain Game",
            description: ""
        },
        {
            title: "Alamat",
            company: "KP PASIR KARAMAT",
            period: "",
            description: "RT 02 RW 14."
        }
    ],
    education: [
        {
            school: "SMKN 1 SOREANG",
            degree: "XI TJKT 2",
            period: "2025-2026",
            gpa: ""
        }
    ]
};

// Fungsi Utama untuk Memuat Data
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Muat Header
    const headerEl = document.getElementById('cv-header');
    headerEl.innerHTML = `
        <h1>${cvData.header.name}</h1>
        <p>${cvData.header.title}</p>
        <p class="contact-info">${cvData.header.contact}</p>
    `;

    // 2. Muat Ringkasan
    document.getElementById('summary').innerHTML = `<p>${cvData.summary}</p>`;

    // 3. Muat Keterampilan (Skills)
    const skillsEl = document.getElementById('skills-list');
    cvData.skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.classList.add('skill-badge');
        badge.textContent = skill;
        skillsEl.appendChild(badge);
    });

    // 4. Muat Pengalaman Kerja
    const experienceEl = document.getElementById('experience-list');
    cvData.experience.forEach(exp => {
        const card = createItemCard(
            exp.title, 
            `${exp.company} | ${exp.period}`, 
            exp.description
        );
        experienceEl.appendChild(card);
    });

    // 5. Muat Pendidikan
    const educationEl = document.getElementById('education-list');
    cvData.education.forEach(edu => {
        const card = createItemCard(
            edu.degree, 
            `${edu.school} | ${edu.period} | ${edu.gpa}`, 
            ''
        );
        educationEl.appendChild(card);
    });
});

// Fungsi pembantu untuk membuat kartu item dinamis
function createItemCard(title, meta, description) {
    const card = document.createElement('div');
    card.classList.add('item-card');
    card.innerHTML = `
        <h3>${title}</h3>
        <p class="meta">${meta}</p>
        ${description ? `<p>${description}</p>` : ''}
    `;
    return card;
}