const toggleBtnOpen = document.querySelector('#toggle');
const toggleBtnClose = document.querySelector('#toggle-close');

toggleBtnOpen.addEventListener('click', function () {
    document.querySelector('.nav-group').style.visibility = "visible"; 
    this.style.display = "none";
    toggleBtnClose.style.display = "block";
});

toggleBtnClose.addEventListener('click', function () {
    document.querySelector('.nav-group').style.visibility = "hidden";
    this.style.display = "none";
    toggleBtnOpen.style.display = "block";
});
