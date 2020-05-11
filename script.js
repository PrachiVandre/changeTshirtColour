const button = document.querySelector('button');
const tshirt = document.querySelector('.tshirtWrap');

let shirtImg = document.createElement('img');
shirtImg.src = 'main.png';
tshirt.appendChild(shirtImg);

const myimage = ['1.png', '2.png', '3.png'];

button.addEventListener('click', function () {
    for (let i = 0; i < 5; i++) {
        const imgIndex = parseInt(Math.random() * myimage.length);
        shirtImg.src = myimage[imgIndex];
    }
});