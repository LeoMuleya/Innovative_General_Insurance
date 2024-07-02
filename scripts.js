document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.mySlides');
  let slideIndex = 0;

  function showSlides() {
      slides.forEach((slide, index) => {
          slide.classList.remove('active');
          if (index === slideIndex) {
              slide.classList.add('active');
          }
      });
      slideIndex = (slideIndex + 1) % slides.length;
      setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  showSlides();

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
});

// -----------------------------------------------who we are section
document.addEventListener('DOMContentLoaded', function() {
    const missionBtn = document.querySelector('.mission-btn');
    const visionBtn = document.querySelector('.vision-btn');
    const goalBtn = document.querySelector('.goal-btn');
    const missionText = document.querySelector('.mission-text');
    const visionText = document.querySelector('.vision-text');
    const goalText = document.querySelector('.goal-text');

    missionBtn.addEventListener('click', () => {
        missionText.classList.toggle('hidden');
        visionText.classList.add('hidden');
        goalText.classList.add('hidden');
    });

    visionBtn.addEventListener('click', () => {
        missionText.classList.add('hidden');
        visionText.classList.toggle('hidden');
        goalText.classList.add('hidden');
    });

    goalBtn.addEventListener('click', () => {
        missionText.classList.add('hidden');
        visionText.classList.add('hidden');
        goalText.classList.toggle('hidden');
    });
});

// ------------------------------------------------Our services 

document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service-item');
    const serviceTitle = document.getElementById('service-title');
    const serviceDescription = document.getElementById('service-description');
    const serviceImage = document.getElementById('service-image');

    const serviceData = {
        vehicle: {
            title: 'Motor Vehicle Insurance',
            description: 'Our motor insurance provides complete protection against unforeseen circumstances.',
            image: 'pictures/car 2.png'
        },
        agriculture: {
            title: 'Agriculture Insurance',
            description: 'Insurance to protect agricultural operations, including crops and livestock.',
            image: 'pictures/Agriculture.png'
        },
        construction: {
            title: 'Construction Insurance',
            description: 'Coverage for construction projects, ensuring protection from start to finish.',
            image: 'pictures/Construction.png'
        },
        corporate: {
            title: 'Corporate Insurance',
            description: 'Comprehensive insurance solutions tailored for businesses and corporations.',
            image: 'pictures/Business.png'
        },
        engineering: {
            title: 'Engineering Insurance',
            description: 'Specialized insurance for engineering projects, covering various risks and liabilities.',
            image: 'pictures/Electrical-2.png'
        },
        personal: {
            title: 'Personal Insurance',
            description: 'Personalized insurance plans to protect you and your family.',
            image: 'pictures/Family-Life.png'
        }
    };

    services.forEach(service => {
        service.addEventListener('click', function() {
            const selectedService = this.dataset.service;

            // Update the active service item
            services.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            // Update the details section
            serviceTitle.textContent = serviceData[selectedService].title;
            serviceDescription.textContent = serviceData[selectedService].description;
            serviceImage.src = serviceData[selectedService].image;
        });
    });
});
