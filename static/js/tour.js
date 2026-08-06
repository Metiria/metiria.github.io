const toggleButtons = document.querySelectorAll('.tour-node');

toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const branch = e.target.closest('.tour-branch');
        branch.classList.toggle('hidden');
    });
});