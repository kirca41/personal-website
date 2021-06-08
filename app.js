const button = document.getElementById('top-btn');

window.onscroll = function() {
    scrollFunc();
}

function scrollFunc() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    }
    else {
        button.style.display = 'none';
    }
}