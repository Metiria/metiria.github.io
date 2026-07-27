// FOOTER 

// function for showing the message box of email copying
function showToastMessage() {
    const toast = document.createElement('div');
    toast.textContent = "Email copied to clipboard!";
    toast.className = "mail-toast";
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 1200);
}

// function for mail button in footer
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