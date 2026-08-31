function setupResilientVideo(selector) {
    const video = document.querySelector(selector);
    if (!video) return;

    function tryPlay() {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(function () {
                // Autoplay bloccato temporaneamente (es. risparmio batteria):
                // ritenta dopo un breve ritardo invece di arrenderti subito
                setTimeout(tryPlay, 1000);
            });
        }
    }

    // 1. Riprende quando la tab/app torna in primo piano
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden && video.paused) {
            tryPlay();
        }
    });

    // 2. Riprende quando la pagina viene ripristinata dalla cache di navigazione (indietro/avanti)
    window.addEventListener('pageshow', function () {
        if (video.paused) {
            tryPlay();
        }
    });

    // 3. Osserva se il video esce/entra dal viewport durante lo scroll:
    //    su mobile i browser spesso "scaricano" il decoder video quando è fuori schermo
    //    per risparmiare memoria, e non lo riavviano da soli al rientro
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && video.paused) {
                tryPlay();
            }
        });
    }, { threshold: 0.1 });
    observer.observe(video);

    // 4. Watchdog: se il video si "impalla" (stalled/waiting) senza un motivo apparente,
    //    forza un tentativo di ripresa dopo una breve pausa
    ['stalled', 'suspend', 'waiting'].forEach(function (eventName) {
        video.addEventListener(eventName, function () {
            setTimeout(function () {
                if (video.paused) {
                    tryPlay();
                }
            }, 500);
        });
    });

    // 5. Fallback estremo: se dopo diversi tentativi il video resta bloccato,
    //    ricarica la sorgente da zero
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

document.addEventListener('DOMContentLoaded', function () {
    setupResilientVideo('.bg-video');
});