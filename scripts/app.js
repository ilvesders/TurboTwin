function showInfo(info) {
    let infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = info;

    let buttons = document.querySelectorAll('.containercolum > div');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    infoContainer.style.display = 'block';
};

document.getElementById("open-model-btn").addEventListener("click",function(){
    document.getElementById("my-model").classList.add("open")
});

document.getElementById("close-my-model-btn").addEventListener("click",function(){
    document.getElementById("my-model").classList.remove("open")
});
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-model").classList.remove("open")
    }
});

document.querySelector("#my-model .modal__box").addEventListener("click", event => {
    event._isClickWithInModal = true;
});

document.getElementById("my-model").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

function changePhoto(photoUrl) {
    document.getElementById('displayed-photo').src = photoUrl;
}