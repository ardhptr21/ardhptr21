// MemberData interface structure
class MemberData {
    constructor(name, role, bio, socialMedia) {
        this.name = name;
        this.role = role;
        this.bio = bio;
        this.socialMedia = socialMedia;
    }
}

// Member data object with social media links
const memberData = new MemberData(
    "Ardhi Putra",
    "Full Stack Developer",
    "Passionate developer with experience in web technologies, game development, and cybersecurity. Always exploring new technologies and building innovative solutions.",
    {
        instagram: "https://instagram.com/ardhptr21",
        github: "https://github.com/ardhptr21",
        linkedin: "https://linkedin.com/in/ardhptr21"
    }
);

// MemberDialog component class
class MemberDialog {
    constructor() {
        this.modal = document.getElementById('member-dialog');
        this.closeBtn = document.querySelector('.close');
        this.memberProfileBtn = document.getElementById('member-profile-btn');
        
        this.initializeEventListeners();
        this.populateDialog();
    }

    initializeEventListeners() {
        // Open modal when member profile button is clicked
        this.memberProfileBtn.addEventListener('click', () => {
            this.openDialog();
        });

        // Close modal when close button is clicked
        this.closeBtn.addEventListener('click', () => {
            this.closeDialog();
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.closeDialog();
            }
        });

        // Close modal when pressing Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeDialog();
            }
        });
    }

    populateDialog() {
        // Populate member information
        document.querySelector('.member-name').textContent = memberData.name;
        document.querySelector('.member-role').textContent = memberData.role;
        document.querySelector('.member-bio').textContent = memberData.bio;

        // Populate social media links
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            const platform = link.classList.contains('instagram') ? 'instagram' :
                           link.classList.contains('github') ? 'github' :
                           link.classList.contains('linkedin') ? 'linkedin' : null;
            
            if (platform && memberData.socialMedia[platform]) {
                link.href = memberData.socialMedia[platform];
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });
    }

    openDialog() {
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add opening animation
        const modalContent = document.querySelector('.modal-content');
        modalContent.style.animation = 'modalSlideIn 0.5s ease-out';
    }

    closeDialog() {
        const modalContent = document.querySelector('.modal-content');
        modalContent.style.animation = 'modalSlideOut 0.3s ease-in';
        
        setTimeout(() => {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Game animations and effects
class SpaceShooterGame {
    constructor() {
        this.spaceship = document.querySelector('.spaceship');
        this.stars = document.querySelector('.stars');
        
        this.initializeGame();
    }

    initializeGame() {
        // Add keyboard controls for spaceship
        document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event);
        });

        // Add click effect to spaceship
        this.spaceship.addEventListener('click', () => {
            this.shootLaser();
        });
    }

    handleKeyPress(event) {
        const currentLeft = parseInt(window.getComputedStyle(this.spaceship).left) || 0;
        const gameWidth = window.innerWidth;
        
        switch(event.key) {
            case 'ArrowLeft':
                if (currentLeft > 50) {
                    this.spaceship.style.left = (currentLeft - 30) + 'px';
                }
                break;
            case 'ArrowRight':
                if (currentLeft < gameWidth - 100) {
                    this.spaceship.style.left = (currentLeft + 30) + 'px';
                }
                break;
            case ' ':
                event.preventDefault();
                this.shootLaser();
                break;
        }
    }

    shootLaser() {
        // Create laser effect
        const laser = document.createElement('div');
        laser.style.position = 'absolute';
        laser.style.width = '3px';
        laser.style.height = '20px';
        laser.style.background = 'linear-gradient(to top, #00ffff, #ffffff)';
        laser.style.left = this.spaceship.style.left || '50%';
        laser.style.bottom = '100px';
        laser.style.boxShadow = '0 0 10px #00ffff';
        laser.style.zIndex = '10';
        
        document.querySelector('.game-area').appendChild(laser);
        
        // Animate laser
        const laserAnimation = laser.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: 'translateY(-600px)', opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
        
        laserAnimation.onfinish = () => {
            laser.remove();
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize member dialog
    new MemberDialog();
    
    // Initialize space shooter game
    new SpaceShooterGame();
    
    // Add welcome message
    console.log('🚀 Space Shooter Game initialized!');
    console.log('🎮 Controls: Arrow keys to move, Space to shoot');
    console.log('👤 Click "MEMBER PROFILE" to view member information');
});

// Add additional CSS animation for modal close
const style = document.createElement('style');
style.textContent = `
    @keyframes modalSlideOut {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);