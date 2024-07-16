const body = document.body;

svg = document.getElementById('toggler');
    
svg.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})