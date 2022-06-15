const toggleBtn = document.querySelector('#toggleBtn');
const toggleBtn1 = document.querySelector('#toggleBtn1');
const divlist = document.querySelector('.marquee');
divlist.style.display = 'none';
toggleBtn.addEventListener('click', () => {
    if (divlist.style.display == 'none') {
        divlist.style.display = 'block';
    } else {
        divlist.style.display = 'none';
    }

});
toggleBtn1.addEventListener('click', () => {
    if (divlist.style.display == 'none') {
        divlist.style.display = 'block';
    } else {
        divlist.style.display = 'none';
    }
});