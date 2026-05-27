const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if the user already chose dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    // Only change the text if the button actually exists on this page
    if (themeToggle) themeToggle.textContent = 'light mode'; 
}

// Listen for clicks on the toggle button (if it exists)
if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault(); 
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'light mode';
            localStorage.setItem('theme', 'dark'); 
        } else {
            themeToggle.textContent = 'dark mode';
            localStorage.setItem('theme', 'light'); 
        }
    });
}


        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-btn.next');
        const prevButton = document.querySelector('.carousel-btn.prev');
        
        const captionText = document.getElementById('caption-text');
        
        let currentIndex = 0;

        const moveToSlide = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
            
            const activeSlide = slides[index];
            captionText.textContent = activeSlide.dataset.caption;
        };

        nextButton.addEventListener('click', e => {
            if (currentIndex === slides.length - 1) {
                moveToSlide(0); // Loop back to the beginning
            } else {
                moveToSlide(currentIndex + 1);
            }
        });

        prevButton.addEventListener('click', e => {
            if (currentIndex === 0) {
                moveToSlide(slides.length - 1); // Loop to the end
            } else {
                moveToSlide(currentIndex - 1);
            }
        });