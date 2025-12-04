// ======================== 
// 1. DATA PROFIL (FINAL DENGAN LINK UNIK)
// ========================
const profiles = {
    teri: {
        name: "Teri",
        role: "Ketua Tim",
        motto: "Hidup bukan soal seberapa lama, tapi seberapa bermakna.",
        bio: "Respek",
        warna: "#007bff", // Biru
        link: "teri.html" // <-- LINK PRIBADI
    },
    arfa: {
        name: "Arfa",
        role: "Anggota 1",
        motto: "Bahagia bukan tujuan, melainkan cara menjalani perjalanan.",
        bio: ".",
        warna: "#6f42c1", // Ungu
        link: "arfa.html" // <-- LINK PRIBADI
    },
    radhitya: {
        name: "Radhitya",
        role: "Anggota 2",
        motto: "Langkah kecil hari ini bisa menjadi awal perubahan besar.",
        bio: ".",
        warna: "#28a745", // Hijau
        link: "radhitya.html" // <-- LINK PRIBADI
    },
    charisya: {
        name: "Charisya",
        role: "Anggota 3",
        motto: "Senja mengajarkan bahwa perpisahan bisa seindah pertemuan.",
        bio: ".",
        warna: "#dc3545", // Merah
        link: "charisya.html" // <-- LINK PRIBADI
    }
};

// ======================== 
// 2. FUNGSI MODAL
// ========================
const profileModal = document.getElementById('profile-modal');
const modalDetails = document.getElementById('modal-details');
const closeButton = document.querySelector('.close-button');
const teamContainer = document.querySelector('.team-container');

function showProfile(memberId) {
    const profile = profiles[memberId];

    if (profile) {
        // Konten HTML untuk profil dengan link dinamis
        modalDetails.innerHTML = `
            <div class="modal-header" style="border-left: 5px solid ${profile.warna}; padding-left: 20px;">
                <h3>${profile.name}</h3>
                <h4 style="color: ${profile.warna};">${profile.role}</h4>
            </div>
            
            <p class="bio-text" style="color: ${profile.warna};">"${profile.motto}"</p>
            <p>${profile.bio}</p>
            
            <a href="${profile.link}" class="button-lanjut">
                <i class="fas fa-external-link-alt"></i> KUNJUNGI PROFIL LENGKAP ${profile.name.toUpperCase()}
            </a>
            <p style="margin-top: 10px; font-size: 0.8em; color: #777;">* Tombol ini mengarah ke halaman Profil Pribadi.</p>
        `;
        
        profileModal.style.display = 'block';
        setTimeout(() => {
            profileModal.classList.add('active');
        }, 10);
    }
}

function hideModal() {
    profileModal.classList.remove('active');
    setTimeout(() => {
        profileModal.style.display = 'none';
    }, 400); 
}

// Event Listener untuk Kartu Profil
teamContainer.addEventListener('click', (event) => {
    if (event.target.closest('.profile-button')) {
        const memberCard = event.target.closest('.member-card');
        const memberId = memberCard.getAttribute('data-member');
        showProfile(memberId);
    }
});

closeButton.addEventListener('click', hideModal);

window.addEventListener('click', (event) => {
    if (event.target === profileModal) {
        hideModal();
    }
});


// ======================== 
// 3. SCROLL ANIMATION 
// ========================

const animatedElements = document.querySelectorAll('.animate-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, { 
    threshold: 0.1 
});

animatedElements.forEach(element => {
    observer.observe(element);
});



