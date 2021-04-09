const ball1 = document.getElementById('ball1');
const playField1 = document.getElementById('playField1');

//! 1. centering

ball1.style.left = Math.round(playField1.clientWidth / 2 - ball1.offsetWidth / 2) + 'px'; //125
ball1.style.top = Math.round(playField1.clientHeight / 2 - ball1.offsetHeight / 2) + 'px'; //125


//?PlayField
// console.log(playField1.offsetLeft); //8 .... udaljenost do body parrenta
// console.log(playField1.offsetTop); //70 .... udaljenost do body parrenta
// console.log(playField1.clientWidth); //260 .... sadržaj bez bordera
// console.log(playField1.offsetWidth); //300 .... sadržaj sa bordera
// console.log(playField1.clientLeft); //20 .... +veličina bordera

playField1.onclick = function (e) {
    console.log('X:' + (e.pageX - playField1.offsetLeft - playField1.clientLeft) + ' Y:' + (e.pageY - playField1.offsetTop - playField1.clientTop));

    console.log(ball1.getBoundingClientRect());
    console.log(document.elementFromPoint(100, 100).id);

    //? GIVE ME a 'something' in a view
    //koordinate x,y
    let centerX = document.documentElement.clientWidth / 2;
    let centerY = document.documentElement.clientHeight / 2;
    let elem = document.elementFromPoint(centerX, centerY);
    // console.log(elem.id);
}

//?BALL
// console.log(ball1.clientLeft); //4 ...veličina bordera
// console.log(ball1.clientTop); //4 ...veličina bordera
// console.log(ball1.offsetWidth); //20 ...ukupna širina
// console.log(ball1.offsetTop); //120 ...udaljenost od parrenta
// console.log(ball1.offsetLeft); //120...udaljenost od parrenta



//!ISPIS KOORDINATA

const ball2a = document.getElementById('ball2');
const ball2b = document.getElementById('ball2b');
const ball2c = document.getElementById('ball2c');
const playField2 = document.getElementById('playField2');

ball2a.addEventListener('click', (e) => {
    let x = e.pageX - playField2.offsetLeft - playField2.clientLeft;
    let y = e.pageY - playField2.offsetTop - playField2.clientTop;
    ball2a.setAttribute('value', `x:${x} y:${y}`);
    setTimeout(() => ball2a.setAttribute('value', ''), 2000);
    console.log('x: ' + (x));
    console.log('y: ' + (y));

})
ball2b.addEventListener('click', (e) => {

    let x = e.pageX - playField2.offsetLeft - playField2.clientLeft;
    let y = e.pageY - playField2.offsetTop - playField2.clientTop;
    ball2b.setAttribute('value', `x:${x} y:${y}`);
    setTimeout(() => ball2b.setAttribute('value', ''), 2000);
})
ball2c.addEventListener('click', (e) => {

    let x = e.pageX - playField2.offsetLeft - playField2.clientLeft;
    let y = e.pageY - playField2.offsetTop - playField2.clientTop;
    ball2c.setAttribute('value', `x:${x} y:${y}`);
    setTimeout(() => ball2c.setAttribute('value', ''), 2000);
})


//!moving (konzola)
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.getElementById('btn-right');
const btnUp = document.querySelector('#btn-up');
const btnDown = document.querySelector('#btn-down');

const ball3 = document.getElementById('ball3');
const playField3 = document.getElementById('playField3');

//* prikaz koordinata
ball3.addEventListener('click', (e) => {
    let x = ball3.offsetLeft;
    let y = ball3.offsetTop;
    ball3.setAttribute('value', `x:${x} y:${y}`);
    setTimeout(() => ball3.setAttribute('value', ''), 2000);
})

btnRight.addEventListener('click', (e) => {
    let x = ball3.offsetLeft; //pohrani prostor od roditelja
    if (x < (playField3.clientWidth - playField3.clientLeft)) //inače samo clientWidt... ali mislim da zbog => ovoga: box-sizing: border-box; moram tako
        ball3.style.left = x + 10 + 'px';
    else
        ball3.setAttribute('value', `OVERFLOW!!!`);

    setTimeout(() => ball3.setAttribute('value', ''), 2000);
})
btnLeft.addEventListener('click', (e) => {

    let x = ball3.offsetLeft; //pohrani prostor od roditelja
    if (x > 0)
        ball3.style.left = x - 10 + 'px';
    else
        ball3.setAttribute('value', `OVERFLOW!!!`);

    setTimeout(() => ball3.setAttribute('value', ''), 2000);
})
btnDown.addEventListener('click', (e) => {

    let x = ball3.offsetTop; //pohrani prostor od roditelja
    console.log(x);
    if (x < (playField3.clientHeight - playField3.clientTop))
        ball3.style.top = x + 10 + 'px';
    else
        ball3.setAttribute('value', `OVERFLOW!!!`);

    setTimeout(() => ball3.setAttribute('value', ''), 2000);
})
btnUp.addEventListener('click', (e) => {

    let x = ball3.offsetTop; //pohrani prostor od roditelja
    if (x > 0)
        ball3.style.top = x - 10 + 'px';
    else
        ball3.setAttribute('value', `OVERFLOW!!!`);

    setTimeout(() => ball3.setAttribute('value', ''), 2000);
})

//! KLIK set-UP (300x300)

const playField4 = document.getElementById('playField4')
const ball4 = document.getElementById('ball4')

playField4.addEventListener('click', (e) => {
    let pozicijaL = e.pageX - playField4.offsetLeft - playField4.clientLeft;

    let pozicijaT = e.pageY - playField4.offsetTop - playField4.clientTop;



    console.log(playField4.clientHeight - playField4.clientTop);
    // console.log(playField4.getBoundingClientRect());

    if (pozicijaL < playField4.clientWidth && pozicijaL > 0)
        ball4.style.left = (pozicijaL - ball4.offsetWidth / 2) + 'px';
    if (pozicijaT < playField4.clientHeight && pozicijaT > 0)
        ball4.style.top = (pozicijaT - ball4.offsetHeight / 2) + 'px';

    let x1 = ball4.offsetLeft;
    let x2 = ball4.offsetTop; //pohrani prostor od roditelja
    console.log(x1 + '-' + x2);
})
//!-----------------------------------------------------------------------
//!             KOORDINATE ...clockWise
//variables
const btnStart = document.querySelector('#btnStartCoordinates');
const btnPoz1 = document.querySelector('#btnPoz1Coordinates');
const btnPoz2 = document.querySelector('#btnPoz2Coordinates');
const btnPoz3 = document.querySelector('#btnPoz3Coordinates');

const btnShow = document.querySelector('#btnShowCoordinates');

const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');
const point3 = document.getElementById('point3');
const point4 = document.getElementById('point4');
const point5 = document.getElementById('point5');
const playField5 = document.getElementById('playField5');

//!POSITION 1
btnPoz1.addEventListener('click', () => {
    // left-top corner (START)
    point1.style.left = Math.round(0 - point1.offsetWidth / 2) + 'px';
    point1.style.top = Math.round(0 - point1.offsetHeight / 2) + 'px';
    //right-top corner
    point2.style.left = Math.round(playField5.clientWidth - point2.offsetWidth / 2) + 'px'; //
    point2.style.top = Math.round(0 - point1.offsetHeight / 2) + 'px'; //
    //right-bottom corner
    point3.style.left = Math.round(playField5.clientWidth - point3.offsetWidth / 2) + 'px'; //
    point3.style.top = Math.round(playField5.clientHeight - point3.offsetHeight / 2) + 'px'; //
    //left-bottom corner
    point4.style.left = Math.round(0 - point4.offsetWidth / 2) + 'px'; //
    point4.style.top = Math.round(playField5.clientHeight - point4.offsetHeight / 2) + 'px'; //
    //CENTER
    point5.style.left = Math.round(playField5.clientWidth / 2 - point5.offsetWidth / 2) + 'px'; //
    point5.style.top = Math.round(playField5.clientHeight / 2 - point5.offsetHeight / 2) + 'px'; //

})
//! POZICIJA 2
btnPoz2.addEventListener('click', () => {
    // left-top corner (START) ...pomakni u gornji kut
    point1.style.left = Math.round(0 - playField5.clientLeft) + 'px';
    point1.style.top = Math.round(0 - playField5.clientTop) + 'px';
    //right-top corner
    point2.style.left = Math.round(0 + playField5.clientWidth) + 'px'; //
    point2.style.top = Math.round(0 + playField5.clientHeight) + 'px'; //
    //right-bottom corner
    point3.style.left = Math.round(0 + playField5.clientWidth + playField5.clientLeft - point3.offsetWidth) + 'px'; //
    point3.style.top = Math.round(0 + playField5.clientHeight + playField5.clientLeft - point3.offsetWidth) + 'px'; //
    // //left-bottom corner
    point4.style.left = Math.round(0 - point4.offsetWidth / 2) + 'px'; //
    point4.style.top = Math.round(0 - point4.offsetHeight / 2) + 'px'; //
    // //CENTER
    point5.style.left = Math.round(playField5.clientWidth / 2 - point5.offsetWidth / 2) + 'px'; //
    point5.style.top = Math.round(playField5.clientHeight / 2 - point5.offsetHeight / 2) + 'px'; //

    let x1 = point1.offsetLeft;
    let y1 = point1.offsetTop;
    let x2 = point2.offsetLeft;
    let y2 = point2.offsetTop;
    let x3 = point3.offsetLeft;
    let y3 = point3.offsetTop;
    let x4 = point4.offsetLeft;
    let y4 = point4.offsetTop;
    let x5 = point5.offsetLeft;
    let y5 = point5.offsetTop;

})
//! POZICIJA 3
btnPoz3.addEventListener('click', () => {
    //! set points on their position
    // left-top corner (START)
    point1.style.left = Math.round(0 - point1.offsetWidth / 2) + 'px';
    point1.style.top = Math.round(0 - point1.offsetHeight / 2) + 'px';
    //right-top corner
    point2.style.left = Math.round(0 - point1.offsetWidth / 2) + 'px'; //
    point2.style.top = Math.round(0 - point1.offsetHeight / 2) + 'px'; //
    //right-bottom corner
    point3.style.left = Math.round(0 - point1.offsetWidth / 2) + 'px'; //
    point3.style.top = Math.round(playField5.clientHeight - point3.offsetHeight / 2) + 'px'; //
    //left-bottom corner
    point4.style.left = Math.round(0 - point1.offsetWidth / 2) + 'px'; //
    point4.style.top = Math.round(playField5.clientHeight - point4.offsetHeight / 2) + 'px'; //
    //CENTER
    point5.style.left = Math.round(0 - point1.offsetWidth / 2) + 'px'; //
    point5.style.top = Math.round(playField5.clientHeight / 2 - point5.offsetHeight / 2) + 'px'; //


})
//! START POZICIJA
btnStart.addEventListener('click', () => {
    //! set points on their position
    // left-top corner (START)
    point1.style.left = Math.round(0) + 'px';
    point1.style.top = Math.round(0 ) + 'px';
    //right-top corner
    point2.style.left = Math.round(0 )+ 'px'; //
    point2.style.top = Math.round(0) + 'px'; //
    //right-bottom corner
    point3.style.left = Math.round(0 ) + 'px'; //
    point3.style.top = Math.round(0) + 'px'; //
    //left-bottom corner
    point4.style.left = Math.round(0 ) + 'px'; //
    point4.style.top = Math.round(0) + 'px'; //
    //CENTER
    point5.style.left = Math.round(0) + 'px'; //
    point5.style.top = Math.round(0) + 'px'; //

    const points = document.querySelectorAll('#playField5 p');
    // let the coordinates of the points disappear
   
})
//! SHOW COORDINATES
btnShow.addEventListener('click', (e) => {
    let x1 = point1.offsetLeft;
    let y1 = point1.offsetTop;
    let x2 = point2.offsetLeft;
    let y2 = point2.offsetTop;
    let x3 = point3.offsetLeft;
    let y3 = point3.offsetTop;
    let x4 = point4.offsetLeft;
    let y4 = point4.offsetTop;
    let x5 = point5.offsetLeft;
    let y5 = point5.offsetTop;

    point1.setAttribute('value', `x:${x1} y:${y1}`);
    point2.setAttribute('value', `x:${x2} y:${y2}`);
    point3.setAttribute('value', `x:${x3} y:${y3}`);
    point4.setAttribute('value', `x:${x4} y:${y4}`);
    point5.setAttribute('value', `x:${x5} y:${y5}`);

    const points = document.querySelectorAll('#playField5 p');
    // let the coordinates of the points disappear
    setTimeout(() => points.forEach(e => {
        e.setAttribute('value', '')
    }), 2000);
})