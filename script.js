document.getElementById("no-btn").addEventListener("mouseover", function() {
    const btn = this;
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
});