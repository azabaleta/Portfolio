'use strict'
import handleSubmit from '@scripts/private.js';
import css from '@style/app.css';

//-------------- PRELOADER -----------------
//------------------------------------------
const preloader = document.querySelector('#preloader');
const loaded = 'loaded';

window.addEventListener('load', () =>{
    setTimeout(start, 150);
});

function start() {
    preloader.style.display = 'none';
}

//-------------- CUSTOM CURSOR -----------------
//----------------------------------------------
const cursorDisabled = 'cursor-disabled';
const pCursor = document.querySelector('#pointer'); // personaliced cursor part1
const pCursor2 = document.querySelector('#pointer2'); // personaliced cursor part2
const pCursorSvg = document.querySelector('#pointer-svg'); // cursor svg part1
const pCursorSvg2 = document.querySelector('#pointer2-svg'); // cursor svg part2
const root = document.documentElement;
const isClicked = 'is-clicked'; // class
const hidden = 'is-hidden'; // class
const hoverLinks = 'is-hover'; //class
const hoverLinksSVG = 'is-hover-svg'; //class
const hoverLinksSVG2 = 'is-hover-svg2'; //class
const cursorStarter = 'has-a-cursor'; //class

function isTouchDevice(){
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
const isTouch = isTouchDevice();

if(!isTouch){

    const mouseEvents = () =>{
        document.addEventListener('mousemove', moveMouse);
        document.addEventListener('mousedown', mouseDown);
        document.addEventListener('mouseup', mouseUp);
        document.addEventListener('mouseenter', mouseEnter);
        document.addEventListener('mouseleave', mouseLeave);
        hoverHandling();
    };

    const moveMouse = (e) =>{
        root.style.setProperty('--cursor-x', e.clientX + 'px');
        root.style.setProperty('--cursor-y', e.clientY + 'px');
    };
    const mouseDown = () =>{
        pCursor.classList.add(isClicked);
    };
    const mouseUp = () =>{
        pCursor.classList.remove(isClicked);
    };
    const mouseEnter = () =>{
        pCursor.classList.remove(hidden);
        pCursor2.classList.remove(hidden);
    };
    const mouseLeave = () =>{
        pCursor.classList.add(hidden);
        pCursor2.classList.add(hidden);
    };
    const hoverHandling = () =>{  // input[type="button"], input[type="submit"] to exclude text inputs
        const domLinks = document.querySelectorAll('a, button, input, textarea' ); 
        domLinks.forEach((element) =>{
            element.addEventListener('mouseover', () =>{
                pCursor.classList.add(hoverLinks);
                pCursor2.classList.add(hoverLinks);
                pCursorSvg.classList.remove('cls-1');
                pCursorSvg2.classList.remove('cls-2');
                pCursorSvg.classList.add(hoverLinksSVG);
                pCursorSvg2.classList.add(hoverLinksSVG2);
            });
            element.addEventListener('mouseout', () =>{
                pCursor.classList.remove(hoverLinks);
                pCursor2.classList.remove(hoverLinks);
                pCursorSvg.classList.add('cls-1');
                pCursorSvg2.classList.add('cls-2');
                pCursorSvg.classList.remove(hoverLinksSVG);
                pCursorSvg2.classList.remove(hoverLinksSVG2);
            });
        });
    };
    mouseLeave();
    mouseEvents();
    document.body.classList.add(cursorStarter);
}else{
    pCursor.classList.add(cursorDisabled);
    pCursor2.classList.add(cursorDisabled);
}

//-------------- BUTTONS AND POP-UPs -----------------
//----------------------------------------------------
const cvButton = document.querySelector('#cv-button');
const popupCross = document.querySelector('#popup-close');
const messageCross = document.querySelector('#message-close');
const messageOverlay = document.querySelector('#message-overlay');
const cvOverlay = document.querySelector('#popup-overlay');
const cvPopup = document.querySelector('#popup');
const messagePopup = document.querySelector('#message');
cvButton.addEventListener('click', openCVPopup);
popupCross.addEventListener('click', closeCVPopup);
messageCross.addEventListener('click', closeMessage);
const popupGrow = 'popup-grow' //class to popup boxes

function openCVPopup (){
    cvPopup.classList.add(popupGrow);
    cvOverlay.classList.add(popupGrow);
}

function closeCVPopup (){
    cvPopup.classList.remove(popupGrow);
    cvOverlay.classList.remove(popupGrow);
}

function openMessage() {
    messagePopup.classList.add(popupGrow);
    messageOverlay.classList.add(popupGrow);
}
export default openMessage

function closeMessage(){
    messagePopup.classList.remove(popupGrow);
    messageOverlay.classList.remove(popupGrow);
}

//--------------- FORM -------------------
//----------------------------------------
const form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);


