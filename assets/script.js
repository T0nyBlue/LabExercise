let btns = document.querySelectorAll('.nav')

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});



