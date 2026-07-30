// SIMPLE LAYOUT 
// functions for the back-to-top button 
function handleScroll() {
    const backToTopBtn = document.querySelector('#backToTopBtn');
    const copyrightSection = document.querySelector('.copyright-section');

    // Handles the appearing and disappearing of the go-to-up button 
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show'); 
    } else {
        backToTopBtn.classList.remove('show'); 
    }
    // Handles the block mechanics above footer
    if (backToTopBtn && copyrightSection) {
        // Calculates coordinates of copyright section in footer 
        const rect = copyrightSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // If the upper part of the footer enters the screen, calculate how many pixels are visible, adding 30px of original margin 
        if (rect.top < windowHeight) {
            const pushUp = windowHeight - rect.top + 30;
            backToTopBtn.style.bottom = pushUp + 'px';
        } else {
            // Else, mantain default margin
            backToTopBtn.style.bottom = '30px';
        }
    }

}
function scrollToTop() {
    const backToTopBtn = document.querySelector('#backToTopBtn');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });  
}
window.addEventListener('scroll', handleScroll); 
const backToTopBtn = document.querySelector('#backToTopBtn'); 
backToTopBtn.addEventListener('click', scrollToTop); 

// HEADER
// Functions for auto-scrolling header


// FOOTER 
// Function for showing the message box of email copying
function showToastMessage() {
    const toast = document.createElement('div');
    toast.textContent = "Email copied to clipboard!";
    toast.className = "mail-toast";
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 1200);
}
// Functions for mail button in footer
function onMailBtnClick(event) {
    const MailBtn = event.currentTarget; 
    const email = MailBtn.getAttribute('data-email'); 
    console.log(email); 
    navigator.clipboard.writeText(email); 
    // visual effect for copying the email 
    const icon = document.querySelector('#copyMailBtn i'); 
    icon.classList.remove('fa-envelope');
    icon.classList.add('fa-check');
    setTimeout(() => {
        icon.classList.remove('fa-check');
        icon.classList.add('fa-envelope');
    }, 500);
    showToastMessage(); 
}
const copyMailBtn = document.querySelector('#copyMailBtn'); 
copyMailBtn.addEventListener('click', onMailBtnClick); 