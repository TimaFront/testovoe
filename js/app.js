document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.steps__dots .steps__dot');
    const slides = document.querySelectorAll('.steps__slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            showSlide(index);
            startSlideShow();
        });
    });

    startSlideShow();

    // FAQ accordion
    
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq__item-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq__item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });

    // Info more text
    
    const moreButton = document.querySelector('.info__more');
    const hiddenText = document.querySelector('.info__text--hidden');
    
    if (moreButton && hiddenText) {
        moreButton.addEventListener('click', () => {
            hiddenText.style.display = hiddenText.style.display === 'block' ? 'none' : 'block';
            moreButton.textContent = hiddenText.style.display === 'block' ? 'Скрыть' : 'Читать больше';
        });
    }

    // Video player
    const videoWrapper = document.querySelector('.video__wrapper');
    const videoPlayer = document.querySelector('.video__player');
    const videoOverlay = document.querySelector('.video__overlay');
    
    if (videoWrapper && videoPlayer && videoOverlay) {
        videoOverlay.addEventListener('click', () => {
            videoPlayer.play();
            videoOverlay.classList.add('hidden');
        });

        videoPlayer.addEventListener('pause', () => {
            videoOverlay.classList.remove('hidden');
        });

        videoPlayer.addEventListener('play', () => {
            videoOverlay.classList.add('hidden');
        });
    }

    // Reviews video players
    const reviewVideos = document.querySelectorAll('.reviews__video-card');
    const reviewOverlays = document.querySelectorAll('.reviews__video-overlay');

    reviewVideos.forEach((video, index) => {
        const overlay = reviewOverlays[index];
        
        if (video && overlay) {
            overlay.addEventListener('click', () => {
                video.play();
                overlay.classList.add('hidden');
            });

            video.addEventListener('pause', () => {
                overlay.classList.remove('hidden');
            });

            video.addEventListener('play', () => {
                overlay.classList.add('hidden');
            });
        }
    });
});
