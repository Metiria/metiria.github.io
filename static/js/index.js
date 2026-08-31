// Function to avoid video-clip freezing effect
function setupResilientVideo(selector) {
    const video = document.querySelector(selector);
    if (!video) return;

    /* Retries after 1s if autoplay blocks */
    function tryPlay() {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(function () {
                setTimeout(tryPlay, 1000);
            });
        }
    }

    // Resumes when the page comes back into the foreground
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden && video.paused) {
            tryPlay();
        }
    });

    //  Resumes when the page is restored from the navigation cache (back/forward).
    window.addEventListener('pageshow', function () {
        if (video.paused) {
            tryPlay();
        }
    });

    // Resume after scrolling
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && video.paused) {
                tryPlay();
            }
        });
    }, { threshold: 0.1 });
    observer.observe(video);

    // Watchdog timer if video is stalled
    ['stalled', 'suspend', 'waiting'].forEach(function (eventName) {
        video.addEventListener(eventName, function () {
            setTimeout(function () {
                if (video.paused) {
                    tryPlay();
                }
            }, 500);
        });
    });

    // Extreme fallback for critical failure
    let stuckCheckCount = 0;
    let lastTime = -1;
    setInterval(function () {
        if (video.paused || video.ended) return;
        if (video.currentTime === lastTime) {
            stuckCheckCount++;
            if (stuckCheckCount >= 3) {
                video.load();
                tryPlay();
                stuckCheckCount = 0;
            }
        } else {
            stuckCheckCount = 0;
        }
        lastTime = video.currentTime;
    }, 4000);
}
setupResilientVideo('.bg-video');

// Function to enable auto-scrolling carousel plus manual scrolling buttons ---
function initMemberCarousel() {
    const container = document.querySelector('#members-carousel');
    const track = document.querySelector('.css-marquee-track');
    const btnLeft = document.querySelector('#scroll-left');
    const btnRight = document.querySelector('#scroll-right');

    if (!container || !track || !btnLeft || !btnRight) return;

    const originalItems = Array.from(track.children);
    const itemCount = originalItems.length;

    // Triples the cards to achieve infinite loop
    originalItems.forEach(item => track.appendChild(item.cloneNode(true)));
    originalItems.forEach(item => track.appendChild(item.cloneNode(true)));

    const allItems = Array.from(track.children); 

    let cardWidth = 0;
    let totalSetWidth = 0;

    function measure() {
        if (allItems.length >= 2) {
            // Mesures exact distance calculating CSS margins 
            cardWidth = allItems[1].offsetLeft - allItems[0].offsetLeft;
        } else {
            cardWidth = allItems[0].offsetWidth + 30; 
        }
        totalSetWidth = cardWidth * itemCount;
    }

    function getScrollForIndex(index) {
        // Calculate the exact page center
        return (index * cardWidth) + (cardWidth / 2) - (container.clientWidth / 2);
    }

    function findNearestIndex() {
        const center = container.scrollLeft + container.clientWidth / 2;
        let nearestIndex = 0;
        let nearestDist = Infinity;
        
        for(let i = 0; i < allItems.length; i++) {
            const itemCenter = (i * cardWidth) + (cardWidth / 2);
            const dist = Math.abs(itemCenter - center);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestIndex = i;
            }
        }
        return nearestIndex;
    }

    measure();
    window.addEventListener('resize', measure);

    // Initial positioning perfectly centered
    requestAnimationFrame(() => {
        measure();
        container.style.scrollBehavior = 'auto'; // Forza spostamento istantaneo
        container.scrollLeft = getScrollForIndex(itemCount); 
    });

    let isHovering = false;   
    let isAnimating = false;
    // VARIABLE TO CONTROL ANIMATION'S SPEED (Increasing it speed up the scrolling animation)  
    let scrollSpeed = 1.2; 

    function autoplayStep() {
        if (!isHovering && !isAnimating) {
            container.scrollLeft += scrollSpeed;
            
            // Invisible loop
            if (container.scrollLeft >= totalSetWidth * 2) {
                container.scrollLeft -= totalSetWidth;
            } else if (container.scrollLeft <= 0) {
                container.scrollLeft += totalSetWidth;
            }
        }
        requestAnimationFrame(autoplayStep);
    }

    function goTo(direction) {
        if (isAnimating) return; // Avoid freezing if user clicks too much
        isAnimating = true;

        measure(); 

        let nearestIndex = findNearestIndex();

        if (nearestIndex >= itemCount * 2) { 
            container.style.scrollBehavior = 'auto';
            container.scrollLeft -= totalSetWidth;
            nearestIndex -= itemCount;
        } else if (nearestIndex < itemCount) { 
            container.style.scrollBehavior = 'auto';
            container.scrollLeft += totalSetWidth;
            nearestIndex += itemCount;
        }

        const targetIndex = direction === 'next' ? nearestIndex + 1 : nearestIndex - 1;

        container.scrollTo({
            left: getScrollForIndex(targetIndex),
            behavior: 'smooth'
        });

        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }

    btnRight.addEventListener('click', () => goTo('next'));
    btnLeft.addEventListener('click', () => goTo('prev'));

    // Animation stops if cursor is over the card (Desktop)
    container.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'mouse') isHovering = true;
    });
    container.addEventListener('pointerleave', (e) => {
        if (e.pointerType === 'mouse') isHovering = false;
    });

    // Animation stops if cursor is over the card (Mobile)
    container.addEventListener('touchstart', () => isHovering = true, { passive: true });
    container.addEventListener('touchend', () => {
        setTimeout(() => isHovering = false, 1000); 
    });

    // Start
    requestAnimationFrame(autoplayStep);
}
initMemberCarousel();