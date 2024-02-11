function showInfo(info) {
    let infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = info;

    let buttons = document.querySelectorAll('.containercolum > div');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    infoContainer.style.display = 'block';
}

document.getElementById("open-model-btn").addEventListener("click",function(){
    document.getElementById("my-model").classList.add("open")
})