function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-link');

    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.tab-link[onclick="showTab('${tabId}')"]`).classList.add('active');
}
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display ="none";
}
