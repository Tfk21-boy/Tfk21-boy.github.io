// Projects Data
const projects = {
    project1: {
        title: "Data Analytics Dashboard",
        images: [
            {
                url: "img/pr1.png",
                description: "Dashboard overview dengan data utama"
            },
            {
                url: "img/pr2.png", 
                description: "Detail analytics dengan grafik interaktif"
            },
            {
                url: "img/pr3.png",
                description: "Mobile responsive view"
            },
            {
                url: "img/pr4.png",
                description: "Data export functionality"
            },
            {
                url: "img/pr5.png",
                description: "User management panel"
            }
        ],
        tags: ["Data Analysis", "Dashboard", "Visualization", "Business Intelligence"],
        links: [
            { text: "Live Demo", url: "#", icon: "fas fa-external-link-alt" },
            { text: "GitHub", url: "#", icon: "fab fa-github" }
        ]
    },
    project2: {
        title: "Document Management System",
        images: [
            {
                url: "img2/lp1.png",
                description: "Main dashboard dengan document list"
            },
            {
                url: "img2/lp2.png",
                description: "Advanced search interface"
            },
            {
                url: "img2/lp3.png",
                description: "Document preview dan editing"
            },
            {
                url: "img2/lp4.png",
                description: "User permission settings"
            },
            {
                url: "img2/lp5.png",
                description: "Audit trail dan version history"
            }
        ],
        tags: ["Documentation", "Management", "System", "Archive"],
        links: [
            { text: "Case Study", url: "https://tfk21-boy.github.io/https-Tfk21-boy.github.io-desire-audio--/", icon: "fas fa-file-alt" }
        ]
    },
    project3: {
        title: "Workflow Automation System",
        images: [
            {
                url: "img3/ds1.png",
                description: "Workflow builder dengan drag & drop"
            },
            {
                url: "img3/ds2.png",
                description: "Automation rules configuration"
            },
            {
                url: "img3/ds3.png",
                description: "Real-time notifications panel"
            },
            {
                url: "img3/ds4.png",
                description: "Analytics dan performance dashboard"
            },
            {
                url: "img3/ds5.jpeg",
                description: "Integration settings dengan third-party apps"
            }
        ],
        tags: ["Automation", "Workflow", "Efficiency", "Process"],
        links: [
            { text: "Try Demo", url: "https://tfk21-boy.github.io/dashboard-merch/", icon: "fas fa-play" },
            { text: "Documentation", url: "#", icon: "fas fa-book" }
        ]
    }
};

// ========== CERTIFICATES DATA ==========
const certificates = {
    cert1: {
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google",
        date: "June 2024",
        credentialId: "ABC123XYZ",
        description: "Professional certificate covering the entire data analytics process including data cleaning, analysis, visualization, and using R programming, SQL, and Tableau.",
        links: [
            { text: "View Certificate", url: "#", icon: "fas fa-external-link-alt" },
            { text: "Verify Credential", url: "#", icon: "fas fa-shield-check" }
        ],
        image: "ser/sr1.jpg"
    },
    cert2: {
        title: "Full Stack JavaScript Developer",
        issuer: "Dicoding Indonesia", 
        date: "March 2023",
        credentialId: "DICO-789456",
        description: "Comprehensive full-stack development certification covering frontend, backend, databases, and deployment using modern JavaScript stack.",
        links: [
            { text: "View Certificate", url: "#", icon: "fas fa-external-link-alt" },
            { text: "Course Materials", url: "#", icon: "fas fa-book" }
        ],
        image: "ser/sr2.jpeg"
    },
    cert3: {
        title: "SQL Mastery: Complete SQL Bootcamp",
        issuer: "Udemy",
        date: "January 2023",
        credentialId: "UDM-2023-SQL001",
        description: "Comprehensive SQL training covering from basic queries to advanced database management, optimization, and administration.",
        links: [
            { text: "View Certificate", url: "#", icon: "fas fa-external-link-alt" }
        ],
        image: "ser/sr3.jpg"
    }
};

// ========== CERTIFICATE MODAL FUNCTIONS ==========
function openCertificateModal(certId) {
    console.log("Opening certificate modal for:", certId);
    
    const certificate = certificates[certId];
    if (!certificate) {
        console.error("Certificate not found:", certId);
        return;
    }
    
    try {
        // Update modal content
        const titleElement = document.getElementById('certModalTitle');
        const issuerElement = document.getElementById('certModalIssuer');
        const dateElement = document.getElementById('certModalDate');
        const idElement = document.getElementById('certModalId');
        const descElement = document.getElementById('certModalDescription');
        const imageElement = document.getElementById('certModalImage');
        
        if (titleElement) titleElement.textContent = certificate.title;
        if (issuerElement) issuerElement.textContent = certificate.issuer;
        if (dateElement) dateElement.textContent = certificate.date;
        if (idElement) idElement.textContent = `ID: ${certificate.credentialId}`;
        if (descElement) descElement.textContent = certificate.description;
        
        // Tampilkan gambar
        if (imageElement) {
            if (certificate.image) {
                imageElement.src = certificate.image;
                imageElement.alt = certificate.title;
                imageElement.style.display = 'block';
                
                imageElement.onerror = function() {
                    console.warn("Certificate image failed to load:", certificate.image);
                    this.src = 'https://via.placeholder.com/800x500/333333/FFFFFF?text=Certificate+Image';
                    this.alt = 'Certificate Image Placeholder';
                };
            } else {
                imageElement.src = 'https://via.placeholder.com/800x500/333333/FFFFFF?text=Certificate+Image';
                imageElement.style.display = 'block';
            }
        }
        
        // Update links
        const linksContainer = document.getElementById('certModalLinks');
        if (linksContainer) {
            linksContainer.innerHTML = '';
            if (certificate.links && certificate.links.length > 0) {
                certificate.links.forEach(link => {
                    const linkEl = document.createElement('a');
                    linkEl.href = link.url || '#';
                    linkEl.className = 'project-link';
                    linkEl.target = '_blank';
                    linkEl.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
                    linksContainer.appendChild(linkEl);
                });
            } else {
                linksContainer.innerHTML = '<p style="color: #999; font-style: italic;">No links available</p>';
            }
        }
        
        // Show modal
        const modal = document.getElementById('certificateModal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        console.log("Certificate modal opened successfully");
    } catch (error) {
        console.error("Error opening certificate modal:", error);
        alert("Error loading certificate details. Please try again.");
    }
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
}

// Carousel State
let currentCarouselState = {
    currentSlide: 0,
    totalSlides: 0,
    autoSlideInterval: null
};

// Carousel Functions
function initCarousel(projectImages) {
    const slidesContainer = document.getElementById('carouselSlides');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!slidesContainer || !dotsContainer) {
        console.error("Carousel elements not found");
        return;
    }
    
    // Clear previous content
    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create slides
    projectImages.forEach((image, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.description || `Project image ${index + 1}`;
        img.onerror = function() {
            console.warn("Project image failed to load:", image.url);
            this.src = 'https://via.placeholder.com/900x400/8B0000/FFFFFF?text=Project+Image';
        };
        
        const overlay = document.createElement('div');
        overlay.className = 'slide-overlay';
        
        const description = document.createElement('div');
        description.className = 'slide-description';
        description.textContent = image.description || '';
        
        overlay.appendChild(description);
        slide.appendChild(img);
        slide.appendChild(overlay);
        slidesContainer.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Update state
    currentCarouselState.currentSlide = 0;
    currentCarouselState.totalSlides = projectImages.length;
    
    // Update counter
    updateSlideCounter();
    
    // Start auto-slide
    startAutoSlide();
}

function goToSlide(index) {
    const slidesContainer = document.getElementById('carouselSlides');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!slidesContainer || index >= currentCarouselState.totalSlides) return;
    
    // Update slide position
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Update state
    currentCarouselState.currentSlide = index;
    updateSlideCounter();
    
    // Reset auto-slide timer
    resetAutoSlide();
}

function nextSlide() {
    const nextIndex = (currentCarouselState.currentSlide + 1) % currentCarouselState.totalSlides;
    goToSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentCarouselState.currentSlide - 1 + currentCarouselState.totalSlides) % currentCarouselState.totalSlides;
    goToSlide(prevIndex);
}

function updateSlideCounter() {
    const currentSlideElement = document.getElementById('currentSlide');
    const totalSlidesElement = document.getElementById('totalSlides');
    
    if (currentSlideElement) {
        currentSlideElement.textContent = currentCarouselState.currentSlide + 1;
    }
    if (totalSlidesElement) {
        totalSlidesElement.textContent = currentCarouselState.totalSlides;
    }
}

function startAutoSlide() {
    // Clear existing interval
    if (currentCarouselState.autoSlideInterval) {
        clearInterval(currentCarouselState.autoSlideInterval);
    }
    
    // Start new interval (change slide every 5 seconds)
    currentCarouselState.autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    startAutoSlide();
}

function stopAutoSlide() {
    if (currentCarouselState.autoSlideInterval) {
        clearInterval(currentCarouselState.autoSlideInterval);
        currentCarouselState.autoSlideInterval = null;
    }
}

// Modal Functions
function openProjectModal(projectId) {
    console.log("Opening modal for:", projectId);
    
    const project = projects[projectId];
    if (!project) {
        console.error("Project not found:", projectId);
        alert("Project data not found!");
        return;
    }
    
    try {
        // Initialize carousel with project images
        if (project.images && project.images.length > 0) {
            initCarousel(project.images);
        } else {
            // Fallback if no images
            const slidesContainer = document.getElementById('carouselSlides');
            if (slidesContainer) {
                slidesContainer.innerHTML = `
                    <div class="carousel-slide" style="display:flex;align-items:center;justify-content:center;">
                        <i class="fas fa-project-diagram" style="font-size:5rem;color:var(--secondary);"></i>
                    </div>
                `;
            }
        }
        
        // Update project info
        const titleElement = document.getElementById('modalProjectTitle');
        if (titleElement) {
            titleElement.textContent = project.title;
        }
        
        // Update tags
        const tagsContainer = document.getElementById('modalProjectTags');
        if (tagsContainer) {
            tagsContainer.innerHTML = '';
            if (project.tags && project.tags.length > 0) {
                project.tags.forEach(tag => {
                    const tagEl = document.createElement('span');
                    tagEl.className = 'modal-tag';
                    tagEl.textContent = tag;
                    tagsContainer.appendChild(tagEl);
                });
            }
        }
        
        // Update links
        const linksContainer = document.getElementById('modalProjectLinks');
        if (linksContainer) {
            linksContainer.innerHTML = '';
            if (project.links && project.links.length > 0) {
                project.links.forEach(link => {
                    const linkEl = document.createElement('a');
                    linkEl.href = link.url || '#';
                    linkEl.className = 'project-link';
                    linkEl.target = '_blank';
                    linkEl.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
                    linksContainer.appendChild(linkEl);
                });
            } else {
                linksContainer.innerHTML = '<p style="color: #999; font-style: italic;">No links available</p>';
            }
        }
        
        // Show modal
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        // Start auto-slide
        startAutoSlide();
        
        console.log("Project modal opened successfully");
    } catch (error) {
        console.error("Error opening project modal:", error);
        alert("Error loading project details. Please try again.");
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
    
    // Stop auto-slide when modal is closed
    stopAutoSlide();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio loaded successfully!");
    
    // Event listeners untuk SEMUA project cards (baik projects maupun certificates)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const projectId = this.getAttribute('data-project');
            const certId = this.getAttribute('data-certificate');
            
            if (projectId && projects[projectId]) {
                console.log("Project clicked:", projectId);
                openProjectModal(projectId);
            } else if (certId && certificates[certId]) {
                console.log("Certificate clicked:", certId);
                openCertificateModal(certId);
            } else {
                console.error("Data not found for element:", this);
                alert("Content not available. Please try another item.");
            }
        });
        
        card.style.cursor = 'pointer';
    });
    
    // Certificate modal close
    const certCloseBtn = document.querySelector('.cert-close-modal');
    if (certCloseBtn) {
        certCloseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeCertificateModal();
        });
    }
    
    const certModal = document.getElementById('certificateModal');
    if (certModal) {
        certModal.addEventListener('click', function(e) {
            if (e.target === this) closeCertificateModal();
        });
    }
    
    // Project modal close
    const projCloseBtn = document.querySelector('.close-modal');
    if (projCloseBtn) {
        projCloseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeProjectModal();
        });
    }
    
    const projModal = document.getElementById('projectModal');
    if (projModal) {
        projModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProjectModal();
            }
        });
    }
    
    // Event listener untuk form kontak
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scroll untuk navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Tutup mobile menu jika terbuka
                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Previous/Next buttons untuk carousel
    const prevBtn = document.querySelector('.prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            prevSlide();
        });
    }
    
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nextSlide();
        });
    }
    
    // Pause auto-slide on hover
    const carousel = document.querySelector('.project-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.padding = '15px 0';
                header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
            } else {
                header.style.padding = '25px 0';
                header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            }
        }
    });
    
    // Escape key untuk menutup modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeCertificateModal();
        }
    });
    
    console.log("All event listeners initialized!");
});

// WhatsApp Form
document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById("contactForm");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");
            
            if (!name || !email || !message) {
                alert("Please fill in all fields!");
                return;
            }

            const phoneNumber = "6281222798436";
            const text = `Hello, my name is ${name.value}
Email: ${email.value}

${message.value}`;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            window.open(whatsappURL, "_blank");
        });
    }
});

// Fungsi untuk testing
function testProjectModal() {
    console.log("Testing project modal...");
    openProjectModal('project1');
}

function testCertificateModal() {
    console.log("Testing certificate modal...");
    openCertificateModal('cert1');
}