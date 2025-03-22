// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Features data
const features = [
    {
        icon: 'brain-circuit',
        title: "AI-Powered Matching",
        description: "Our advanced AI algorithm matches you with the perfect projects or talent."
    },
    {
        icon: 'search',
        title: "Smart Search",
        description: "AI-enhanced search understands context and delivers precise results."
    },
    {
        icon: 'users',
        title: "Zero Commission for 6 Months",
        description: "Start your freelancing journey with zero platform fees for 6 months."
    },
    {
        icon: 'star',
        title: "Premium Visibility",
        description: "Boost your profile visibility with our subscription plans."
    }
];

// Render features
const featuresGrid = document.getElementById('featuresGrid');
features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    featureCard.innerHTML = `
        <i data-lucide="${feature.icon}" class="text-primary mb-4"></i>
        <h3 class="text-xl font-semibold mb-2">${feature.title}</h3>
        <p class="text-gray-600">${feature.description}</p>
    `;
    featuresGrid.appendChild(featureCard);
});

// Testimonials data
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        content: "Xwork's AI matching system helped me find my dream projects. The zero commission period gave me the perfect start!"
    },
    {
        name: "Michael Chen",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        content: "The AI-powered search is incredibly accurate. I've found more relevant projects here than on any other platform."
    }
];

// Render testimonials
const testimonialsGrid = document.getElementById('testimonialsGrid');
testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
        <div class="testimonial-header">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
            <div>
                <h4 class="font-semibold">${testimonial.name}</h4>
                <p class="text-gray-600">${testimonial.role}</p>
            </div>
        </div>
        <p class="text-gray-700">${testimonial.content}</p>
        <div class="flex mt-4">
            ${Array(5).fill('<i data-lucide="star" class="text-yellow-400"></i>').join('')}
        </div>
    `;
    testimonialsGrid.appendChild(testimonialCard);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .testimonial-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check
