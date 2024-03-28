let left = document.getElementById('left');
let right = document.getElementById('right');
let aste = document.getElementById('aste');
let bot = document.getElementById('bot');
let titl = document.getElementById('titl');

const parallax = () => {
    window.addEventListener('scroll', () =>{
        let value = window.scrollY;
        if (value<=100){
            titl.style.display="block";
            titl.style.marginTop = value*1.5 + 'px';
        } 
        left.style.marginLeft = value*-1.5 + 'px';
        left.style.marginTop = value*-1.5 + 'px';
        right.style.marginLeft = value*1.5 + 'px';
        right.style.marginTop = value*-1.5 + 'px';
        aste.style.marginTop = value*-1.5 + 'px';
    })
};

parallax();