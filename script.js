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
                overview: "Sistem dashboard komprehensif untuk visualisasi data dengan interface yang informatif dan mudah dipahami. Dirancang untuk membantu pengambilan keputusan berbasis data.",
                technologies: ["Python", "Pandas", "Plotly", "React", "MySQL", "REST API"],
                features: [
                    "Real-time data visualization dengan grafik interaktif",
                    "Customizable dashboard dengan drag & drop widgets",
                    "Export data ke berbagai format (PDF, Excel, CSV)",
                    "User permission management dengan role-based access",
                    "Mobile-responsive design untuk akses dari berbagai device"
                ],
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
                overview: "Sistem pengelolaan dokumen digital dengan pencarian dan arsip yang terstruktur. Mendukung workflow approval dan version control.",
                technologies: ["PHP", "Laravel", "MySQL", "Elasticsearch", "AWS S3", "JavaScript"],
                features: [
                    "Advanced search dengan full-text indexing",
                    "Automatic document categorization dan tagging",
                    "Workflow approval dengan multiple stages",
                    "Version control dan audit trail",
                    "Secure document sharing dengan encryption"
                ],
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
                overview: "Solusi otomasi alur kerja untuk meningkatkan efisiensi proses administratif. Mengurangi manual work dan human error.",
                technologies: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker", "Redis"],
                features: [
                    "Drag & drop workflow builder",
                    "Integration dengan berbagai third-party services",
                    "Real-time notifications dan alerts",
                    "Analytics dan performance tracking",
                    "Scheduling dan batch processing"
                ],
                links: [
                    { text: "Try Demo", url: "#", icon: "fas fa-play" },
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
                skills: [
                    "Data Analysis",
                    "SQL & Database Management", 
                    "Data Visualization",
                    "R Programming",
                    "Statistical Analysis",
                    "Business Intelligence"
                ],
                links: [
                    { text: "View Certificate", url: "#", icon: "fas fa-external-link-alt" },
                    { text: "Verify Credential", url: "#", icon: "fas fa-shield-check" }
                ],
                image: "ser/sr1.jpg" // GANTI dengan gambar sertifikat kamu
            },
            cert2: {
                title: "Full Stack JavaScript Developer",
                issuer: "Dicoding Indonesia", 
                date: "March 2023",
                credentialId: "DICO-789456",
                description: "Comprehensive full-stack development certification covering frontend, backend, databases, and deployment using modern JavaScript stack.",
                skills: [
                    "JavaScript ES6+",
                    "React & Vue.js",
                    "Node.js & Express",
                    "MongoDB & MySQL",
                    "REST API Development",
                    "Git & Deployment"
                ],
                links: [
                    { text: "View Certificate", url: "#", icon: "fas fa-external-link-alt" },
                    { text: "Course Materials", url: "#", icon: "fas fa-book" }
                ],
                image: "sertifikat1.jpg" //
            },
            cert3: {
                title: "SQL Mastery: Complete SQL Bootcamp",
                issuer: "Udemy",
                date: "January 2023",
                credentialId: "UDM-2023-SQL001",
                description: "Comprehensive SQL training covering from basic queries to advanced database management, optimization, and administration.",
                skills: [
                    "SQL Queries & Joins",
                    "Database Design",
                    "Query Optimization",
                    "Stored Procedures",
                    "Database Security",
                    "Data Migration"
                ],
                links: [
                    { text: "View Certificate", url: "#", icon: "fas fa-external-link-alt" }
                ],
                icon: "fas fa-database"
            },
            
        };

        // ========== CERTIFICATE MODAL FUNCTIONS ==========
        function openCertificateModal(certId) {
            console.log("Opening certificate modal for:", certId);
            
            const certificate = certificates[certId];
            if (!certificate) {
                alert("Certificate data not found!");
                return;
            }
            
            // Update modal content
            document.getElementById('certModalTitle').textContent = certificate.title;
            document.getElementById('certModalIssuer').textContent = certificate.issuer;
            document.getElementById('certModalDate').textContent = certificate.date;
            document.getElementById('certModalId').textContent = `ID: ${certificate.credentialId}`;
            document.getElementById('certModalDescription').textContent = certificate.description;
            
            // Update icon
            const imageContainer = document.getElementById('certModalImage');
            imageContainer.innerHTML = `<i class="${certificate.icon}"></i>`;
            
            // Update skills
            const skillsContainer = document.getElementById('certModalSkills');
            skillsContainer.innerHTML = '';
            certificate.skills.forEach(skill => {
                const skillEl = document.createElement('span');
                skillEl.className = 'cert-skill';
                skillEl.textContent = skill;
                skillsContainer.appendChild(skillEl);
            });
            
            // Update links
            const linksContainer = document.getElementById('certModalLinks');
            linksContainer.innerHTML = '';
            certificate.links.forEach(link => {
                const linkEl = document.createElement('a');
                linkEl.href = link.url || '#';
                linkEl.className = 'cert-link';
                linkEl.target = '_blank';
                linkEl.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
                linksContainer.appendChild(linkEl);
            });
            
            // Show modal
            document.getElementById('certificateModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeCertificateModal() {
            document.getElementById('certificateModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // ========== UPDATE EVENT LISTENERS ==========
        // Dalam DOMContentLoaded function, tambahkan:

        document.addEventListener('DOMContentLoaded', function() {
            // ... existing code ...
            
            // ========== CERTIFICATE CARDS ==========
            document.querySelectorAll('.certificate-card').forEach(card => {
                card.addEventListener('click', function() {
                    const certId = this.getAttribute('data-certificate');
                    openCertificateModal(certId);
                });
                
                card.style.cursor = 'pointer';
            });
            
            // Certificate modal close
            document.querySelector('.cert-close-modal').addEventListener('click', closeCertificateModal);
            document.getElementById('certificateModal').addEventListener('click', function(e) {
                if (e.target === this) closeCertificateModal();
            });
            
            // Escape key for certificate modal
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeCertificateModal();
                    closeProjectModal(); // Close both modals
                }
            });
            
            // ... rest of existing code ...
        });

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
                img.alt = `Project image ${index + 1}`;
                img.onerror = function() {
                    this.src = 'https://via.placeholder.com/900x400/8B0000/FFFFFF?text=Project+Image';
                };
                
                const overlay = document.createElement('div');
                overlay.className = 'slide-overlay';
                
                const description = document.createElement('div');
                description.className = 'slide-description';
                description.textContent = image.description;
                
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
            document.getElementById('currentSlide').textContent = currentCarouselState.currentSlide + 1;
            document.getElementById('totalSlides').textContent = currentCarouselState.totalSlides;
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
                alert("Project data not found!");
                return;
            }
            
            // Initialize carousel with project images
            if (project.images && project.images.length > 0) {
                initCarousel(project.images);
            } else {
                // Fallback if no images
                const slidesContainer = document.getElementById('carouselSlides');
                slidesContainer.innerHTML = `
                    <div class="carousel-slide" style="display:flex;align-items:center;justify-content:center;">
                        <i class="fas fa-project-diagram" style="font-size:5rem;color:var(--secondary);"></i>
                    </div>
                `;
            }
            
            // Update other project info
            document.getElementById('modalProjectTitle').textContent = project.title;
            document.getElementById('modalProjectOverview').textContent = project.overview;
            
            // Update tags
            const tagsContainer = document.getElementById('modalProjectTags');
            tagsContainer.innerHTML = '';
            project.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'modal-tag';
                tagEl.textContent = tag;
                tagsContainer.appendChild(tagEl);
            });
            
            // Update technologies
            const techContainer = document.getElementById('modalProjectTech');
            techContainer.innerHTML = '';
            project.technologies.forEach(tech => {
                const techEl = document.createElement('span');
                techEl.className = 'tech-item';
                techEl.textContent = tech;
                techContainer.appendChild(techEl);
            });
            
            // Update features
            const featuresContainer = document.getElementById('modalProjectFeatures');
            featuresContainer.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresContainer.appendChild(li);
            });
            
            // Update links
            const linksContainer = document.getElementById('modalProjectLinks');
            linksContainer.innerHTML = '';
            project.links.forEach(link => {
                const linkEl = document.createElement('a');
                linkEl.href = link.url || '#';
                linkEl.className = 'project-link';
                linkEl.target = '_blank';
                linkEl.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
                linksContainer.appendChild(linkEl);
            });
            
            // Show modal
            const modal = document.getElementById('projectModal');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Start auto-slide
            startAutoSlide();
        }

        function closeProjectModal() {
            const modal = document.getElementById('projectModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Stop auto-slide when modal is closed
            stopAutoSlide();
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', function() {
            console.log("Portfolio loaded successfully!");
            
            // Event listeners untuk project cards
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const projectId = this.getAttribute('data-project');
                    console.log("Project clicked:", projectId);
                    
                    if (projectId && projects[projectId]) {
                        openProjectModal(projectId);
                    } else {
                        console.error("Project data not found for:", projectId);
                        alert("Project data not available. Please try another project.");
                    }
                });
            });
            
            // Event listener untuk close modal
            document.querySelector('.close-modal').addEventListener('click', function(e) {
                e.stopPropagation();
                closeProjectModal();
            });
            
            // Event listener untuk menutup modal saat klik di luar konten
            document.getElementById('projectModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeProjectModal();
                }
            });
            
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
            
            if (mobileMenuBtn) {
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
                        if (window.innerWidth <= 768) {
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
            document.querySelector('.prev-btn').addEventListener('click', function(e) {
                e.stopPropagation();
                prevSlide();
            });
            
            document.querySelector('.next-btn').addEventListener('click', function(e) {
                e.stopPropagation();
                nextSlide();
            });
            
            // Pause auto-slide on hover
            const carousel = document.querySelector('.project-carousel');
            if (carousel) {
                carousel.addEventListener('mouseenter', stopAutoSlide);
                carousel.addEventListener('mouseleave', startAutoSlide);
            }
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.padding = '15px 0';
                    header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
                } else {
                    header.style.padding = '25px 0';
                    header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                }
            });
            
            console.log("All event listeners initialized!");
        });

        // Fungsi untuk testing
        function testModal() {
            console.log("Testing modal...");
            openProjectModal('project1');
        }

        // pesan langsung ke WA
        document.getElementById("contactForm").addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            const phoneNumber = "6281222798436"; // GANTI nomor kamu (tanpa +)

            const text = `Hello, my name is ${name}
        Email: ${email}

        ${message}`;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

            window.open(whatsappURL, "_blank");
        });