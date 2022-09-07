const buttonOne = document.getElementById('btn1');
const buttonTwo =document.getElementById("btn2");
const div = document.getElementById('div');
const menu= document.getElementById('menu')
const content = document.getElementById('content')
const banner = document.getElementById('banner')


buttonOne.addEventListener('click', () => {
    buttonOne.classList.toggle('button1Move')
    menu.classList.toggle('hide');
    content.classList.toggle('marginOut');

})

buttonTwo.addEventListener('click', () => {
    buttonTwo.classList.toggle('button2Move')
    banner.classList.toggle('hide');
    content.classList.toggle('marginrightOut');

})