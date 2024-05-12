const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    a.classList.toggle('dark-mode');
    a:visited.classList.toggle('dark-mode');
});