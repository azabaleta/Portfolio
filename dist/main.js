/*! For license information please see main.js.LICENSE.txt */
(()=>{var n={29:(n,e,t)=>{"use strict";t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),c=t.n(s),l=new URL(t(104),t.b),d=a()(o()),u=c()(l);d.push([n.id,"/* ------------ RESET -------------- */\n/* ---------------------------------*/\n*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 62.5%; /* 10px = 1rem */\n  }\n\n:root \n{\n    --light-gray: #364156;\n    --gray: #212D40;\n    --black: #11151C;\n    --red: #DA2C38;\n    --light-blue: #4382A9;\n    --sand: #DDA448;\n    --light-light: #9AD5CA;\n    --white: #FFFFFF;\n    --tipo-primary: 'Encode Sans', sans-serif;\n    --tipo-secondary: 'IBM Plex Sans', sans-serif;\n    --cursor-x: 0px;\n    --cursor-y: 0px;\n}\nbody{\n    background: var(--light-gray);\n}\na{\n    cursor: none;\n}\nbutton{\n    cursor: none;\n}\n\n/* ------------ PRELOADER -------------- */\n/* ------------------------------------- */\n.preloader{\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    background: var(--red);\n    z-index: 10;\n\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n}\n.logo-gif{\n    width: 240px;\n    height: 315px;\n    background: var(--red) url("+u+") no-repeat center center;\n}\n.ploader-h3{\n    margin-top: 1em;\n    font-size: 2.4em;\n    font-family: var(--tipo-primary);\n    color: var(--gray);\n    opacity: .8;\n}\n.preloader .loaded{\n\n    visibility: hidden;\n}\n\n/* ------------ CUSTOM CURSOR -------------- */\n/* ----------------------------------------- */\n.pointer{\n    position: fixed;\n    left: var(--cursor-x);\n    top: var(--cursor-y);\n    width: 3.5em;\n    height: 3px;\n    z-index: 6;\n    pointer-events: none;  \n    transition: none;\n    mix-blend-mode: difference;\n}\n.pointer2{\n    position: fixed;\n    left: var(--cursor-x);\n    top: var(--cursor-y);\n    width: 3.5em;\n    height: 3px;\n    z-index: 5;\n    opacity: 0.3;\n    pointer-events: none;  \n    transition: none;\n    mix-blend-mode: difference;\n}\n.is-clicked{\n    opacity: .4;\n\n}\n.is-hidden{\n    opacity: 0;\n}\n.is-hover{\n    transform: scale(.8);\n}\n.is-hover-svg{\n    fill: var(--light-blue);\n    opacity: 1;\n}\n.is-hover-svg2{\n    fill: var(--gray);\n    opacity: 0.5;\n}\n.has-a-cursor{\n    cursor: none!important;\n}\n\n.cursor-disabled{\n    display: none;\n}\n\n/* ------------ BACKGROUND ANIMATION -------------- */\n/* ------------------------------------------------ */\n.animated-logo{\n    padding-top: 16em;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.logo-a{\n    width: 20em;\n    opacity: 0;\n    position: relative;\n    top: 10%;\n\n    animation: apearing2 3.5s ease 1 both; /* animations. at the bottom */\n    animation-delay: 0.7s;\n}\n.logo-b{\n    width: 20em;\n    opacity: 0;\n    position: relative;\n    top: 3%;\n\n    animation: apearing1 4s ease 1 both;\n    animation-delay: 0.2s;\n}\n\n/*--------------- CV POP-UP -------------- */\n/* --------------------------------------- */\n\n.overlay{\n    width: 100%;\n    height: 100vh;\n    z-index: 4;\n    background: rgba(0, 0, 0, .4);\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n\n    transition: .4s ease all;\n\n    opacity: 0;\n}\n.popup{\n    width: 40rem;\n    padding: .8em;\n    background-color: var(--white);\n    border-radius: .5em;\n\n    display: flex;\n    flex-flow: column wrap;\n    text-align: center;\n    box-shadow: .5rem .5rem .7rem  #11151C;\n\n    \n    transition: .5s ease all;\n    transform: scale(0.7);\n    opacity: 0;\n}\n.popup-topbar{\n    width: 100%;\n    margin-bottom: 1em;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.popup-h4{\n    width: 95%;\n    color: var(--gray);\n    text-align: center;\n    font-size: 2em;\n    font-family: var(--tipo-secondary);\n    font-weight: 700;\n}\n.popup-close{\n    width: 5%;\n    text-decoration: none;\n    color: var(--gray);\n    text-align: center;\n    font-size: 2em;\n    font-family: var(--tipo-secondary);\n    font-weight: 700;\n    transition: .3s ease all;\n}\n.popup-close:hover{\n    color: var(--red);\n    transform: scale(1.2);\n}\n.columns-container{\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n.es-section{\n    width: 50%;\n    padding: 2em;\n    border-right: .1em solid var(--light-gray);\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n}\n.en-section{\n    width: 50%;\n    padding: 2em;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n}\n.popup-h3{\n    margin-bottom: .4em;\n    font-size: 3em;\n    font-family: var(--tipo-primary);\n    font-weight: 700;\n}\n.popup-button-d{\n    margin: .8em;\n    background-color: var(--red);\n    border-radius: 5px;\n    border: none;\n    color: var(--black);\n    box-shadow: .2rem .2rem .3rem  #11151C;\n    width: 100%;\n    padding: .5em;\n    text-decoration: none;\n\n    transition: .4s ease all;\n}\n.popup-button-d:hover{\n    background-color: var(--sand);\n    color: var(--light-gray);\n}\n.popup-button-d:active{\n    transform: scale(.95);\n    opacity: .95;\n    box-shadow: none;\n}\n.popup-button-w{\n    margin: .8em;\n    background-color: var(--light-blue);\n    border-radius: 5px;\n    border: none;\n    color: var(--black);\n    box-shadow: .2rem .2rem .3rem  #11151C;\n    width: 100%;\n    padding: .5em;\n    text-decoration: none;\n    \n    transition: .4s ease all;\n}\n.popup-button-w:hover{\n    background-color: var(--light-light);\n    color: var(--light-gray);\n}\n.popup-button-w:active{\n    transform: scale(.95);\n    opacity: .95;\n    box-shadow: none;\n}\n.btn-p{\n    font-size: 1.8rem;\n    font-weight: 700;\n    font-family: var(--tipo-primary);\n}\n\n/* ------------ MESSAGE POP-UP -------------- */\n/* ------------------------------------------ */\n.message{\n    padding: 1em;\n}\n.message-h2{\n    font-size: 2.4em;\n    font-family: var(--tipo-primary);\n    color: var(--gray);\n}\n.message-p{\n    margin-top: .4em;\n    font-size: 1.8em;\n    font-family: var(--tipo-secondary);\n    color: var(--gray);\n}\n\n/* ------- POP-UP ANIMATIONS AND CHANGES ------- */\n/* --------------------------------------------- */\n.popup-grow{\n    opacity: 1;\n    transform: scale(1);\n}\n.overlay.popup-grow{\n    visibility: visible;\n}\n.popup-grow .es-section{\n    animation: apearingP .4s ease 1 both; /* animations. at the bottom */\n    animation-delay: 0.4s\n}\n.popup-grow .en-section{\n    animation: apearingP2 .4s ease 1 both; /* animations. at the bottom */\n    animation-delay: 0.6s\n}\n\n/* ------------ HEADER -------------- */\n/* ---------------------------------- */\n.header{\n    width: 100%;\n    min-height: 15em;\n    background: var(--gray);\n    box-shadow: 0 .2rem .6rem  #11151C;\n    z-index: 3;\n    position: relative;\n    padding: 1em 2em;\n\n    display: flex;\n    flex-flow: column;\n    justify-content: space-around;\n}\n.header .container-top{\n    min-height: 8em;  \n    padding: 1em;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n}\n.container-top .logo-img{\n    width: 20rem;\n}\n\n.header .CV-button{\n    background-color: var(--light-blue);\n    border-radius: 5px;\n    border: none;\n    color: var(--black);\n    box-shadow: .2rem .2rem .3rem  #11151C;\n    width: 100%;\n    padding: .5em;\n    font-size: 1.8rem;\n    font-weight: 700;\n\n    transition: .3s ease all;\n}\n.header .CV-button:hover{\n\n    background-color: var(--red);\n    color: rgb(216, 213, 213);\n}\n.header .CV-button:active{\n    transform: scale(.95);\n    opacity: .95;\n    box-shadow: none;\n}\n\n/* ------------ NAVBAR -------------- */\n/* ---------------------------------- */\n.header .navbar{\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n.navbar .ul{\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n\n    list-style: none;\n    margin-left: 3em;\n    gap: 5em;\n}\n.navbar .li{\n    margin: 1em;\n    border-left: .2em solid var(--red);\n    padding-left: 1em;\n}\n.navbar .a{\n    position: relative;\n    text-decoration: none;\n    width: 100%;\n    font-family: var(--tipo-primary);\n    font-size: 1.8rem;\n    font-weight: 700;\n    color: var(--white);\n    opacity: .5;\n\n    transition: .4s ease all;\n \n}\n.navbar .a:hover{\n    opacity: 1;\n    font-size: 1.9rem;\n}\n/* ------------ MAIN SECTIONS -------------- */\n/* ----------------------------------------- */\n.main{\n    width: 100%;\n    position: relative; /* most be positioned so that z-index works */\n    z-index: 2;\n}\n\n/* ------------ INTRO SECTION -------------- */\n/* ----------------------------------------- */\n.section{\n  /*   background:var(--light-gray); */\n    width: 100%;\n    min-height: 100vh;\n    text-align: center;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n\n}\n.section .h2{\n\n    font-family: var(--tipo-primary);\n    font-size: 10em;\n    font-weight: 900;\n    line-height: 0.6em;\n    animation: apearing3 2s ease 1 both;\n    animation-delay: 3.2s;\n}\n.section .h3{\n    font-family: var(--tipo-primary);\n    font-size: 8.5em;\n    font-weight: 500;\n    animation: apearing3 2s ease 1 both;\n    animation-delay: 3.3s;\n}\n\n/* ------------ ABOUT SECTION -------------- */\n/* ----------------------------------------- */\n.section-about{\n    background:var(--red);\n    box-shadow: 0 .4rem .7rem var(--gray);\n    width: 100%;\n    max-height: 150vh;\n    min-height: 50vh;\n    display: flex;\n    flex-direction: row;\n    opacity: .8;\n    mix-blend-mode: difference;\n}\n.section-about .about-left{\n    width: 40%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.about-left .personal-ph{\n    width: 80%;\n}\n.section-about .about-right{\n    width: 60%;\n    margin: 6em;\n    justify-content: space-between;\n    text-align: left;\n}\n.about-right .h2{\n    margin: 0 0 0.5em;\n    max-width: 98%;\n    text-align: left;\n    font-family: var(--tipo-primary);\n    font-size: 10em;\n}\n.about-right .p{\n    margin: 0 0 2em;\n    max-width: 98%;\n    text-align: left;\n    font-family: var(--tipo-secondary);\n    font-size: 3em; \n    font-weight: 400;\n}\n\n/* ------------ WORKS SECTION -------------- */\n/* ----------------------------------------- */\n.section-work{\n  /*   background: var(--light-gray); */\n    width: 100%;\n    min-height: 100vh;\n    text-align: center;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n}\n.section-work .h2{\n    margin-top: 0.5em;\n    font-family: var(--tipo-primary);\n    font-size: 10em;\n    font-weight: 700;\n}\n.section-work .p{\n    font-family: var(--tipo-secondary);\n    font-size: 3em;\n    font-weight: 400;\n    line-height: 0.5em;\n}\n.grid{\n    width: 80%;\n    min-width: 20em;\n    margin: 4em;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    gap: 1em;\n    overflow: hidden;\n}\n.grid .article{\n    width: 100%;\n    min-height: 55vh;\n\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n    position: relative;\n    overflow: hidden;\n}\n.grid .article .h3{\n    font-family: var(--tipo-primary);\n    font-weight: 500;\n    font-size: 3em;\n    color: var(--red);\n    display: flex;\n    align-items: flex-start;\n}\n.article .a{\n    max-width: 100%;\n    width: 100%;\n    height: 90%;\n}\n.a .figure{\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    border-radius: 5%;\n    display: flex;\n    align-items: flex-end;\n    object-fit: cover;\n}\n.work-img{\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    border-radius: 0.8em;\n    display: flex;\n    object-fit: cover;\n    object-position: center center;\n\n}\n.h4-container{\n    width: 100%;\n    height: 90%;\n    padding: 3em;\n    border-radius: 0.8em;\n    background-color: var(--gray);\n    opacity: 0.98;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: flex-start;\n    \n    opacity: 0;\n    transition: all .4s ease;\n    transform: scale(1.2);;\n}\n.grid .article .a:hover .h4-container{\n    opacity: 0.95;\n    transform:scale(1);\n}\n.h4-container .h4{\n    margin: 0.5em;\n    font-family: var(--tipo-primary);\n    font-weight: 500;\n    font-size: 2.5em;\n    text-decoration: none;\n    color: var(--light-blue);\n\n    opacity: 0;\n    transition: all .4s ease;\n    transform:scale(1.2);\n}\n.article .a:hover .h4{\n    opacity: 1;\n    transform: scale(1);\n}\n\n/* ------------ CONTACT SECTION -------------- */\n/* ------------------------------------------- */\n.section-cont{\n    padding-top: 5em;\n    background:var(--red);\n    width: 100%;\n    min-height: 100vh;\n    text-align: center;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    opacity: .8;\n    mix-blend-mode: difference;\n}\n.section-cont .h2{\n    font-family: var(--tipo-primary);\n    font-size: 10em;\n    font-weight: 700;\n}\n.section-cont .p{\n    font-family: var(--tipo-secondary);\n    font-size: 4em;\n    font-weight: 400;\n    line-height: 0.5em;\n}\n.sm-ul{\n    margin-top: 4em;\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: center;\n}\n.sm-ul .sm-li{\n    list-style: none;\n    margin:0 4em\n}\n.sm-li .a{\n    text-decoration: none;\n    color: #11151C;\n\n    transition: 4s ease all;\n}\n.sm-li .a .svg:hover{\n    transform: scale(1.2);\n    color: rgb(rgb(37, 4, 4));\n    opacity: .9;\n}\n.a .svg{\n    width: 5em;\n    height: 5em;\n}\n.container-form{\n    width: 50rem;\n}\n.form{\n    margin: 4em 0 6em 0;\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n}\n.form .label{\n    margin: 1.5em 0 .5em 0;\n    text-align: left;\n    font-size: 2em;\n    font-family: var(--tipo-primary);\n    font-weight: 500;\n    cursor: none;\n}\n.form .input{\n    height: 2em;\n    padding-left: .8em;\n    border-radius: .4em;\n    background: var(--gray);\n    color: var(--white);  \n    box-shadow: .2rem .2rem .3rem  #11151C;\n    cursor: none!important ;\n}\n.textarea{\n    height: 200px;\n    padding-top: .5em;\n    padding-left: .8em;\n    border-radius: .4em;\n    background: var(--gray);\n    color: var(--white);\n    box-shadow: .2rem .2rem .3rem  #11151C;\n    cursor: none;\n}\n.submit-button{\n    margin-top: 1em;\n    height: 2.5em;\n    border-radius: 0.4em;\n    font-size: 1.5em;\n    color: var(--white);\n    font-family: var(--tipo-primary);\n    font-weight: 700;\n    background: var(--light-blue); \n    box-shadow: .2rem .2rem .3rem  #11151C; \n    cursor: none; \n    \n    transition: .4s ease all;\n}\n.submit-button:hover{\n    background-color: var(--gray);\n    color: rgb(216, 213, 213);\n    opacity: .9;\n}\n.submit-button:active{\n    transform: scale(.95);\n    opacity: .95;\n    box-shadow: none;\n}\n\n/* ------------  ANIMATIONS -------------- */\n/* --------------------------------------- */\n@keyframes apearing1{\n    0%{\n        opacity: 0;\n        transform:  translateX(50%);\n    }\n    75%{\n        opacity: 1;\n        transform: translateX(0%);\n    }\n    100%{\n        opacity: .3;\n    }\n}\n@keyframes apearing2{\n    0%{\n        opacity: 0;\n        transform:  translateX(-50%);\n    }\n    75%{\n        opacity: 1;\n        transform: translateX(0%);\n    }\n    100%{\n        opacity: .3;\n    }\n}\n@keyframes apearing3{\n    from{\n        opacity: 0;\n        transform:  translatey(50%);\n    }\n    to{\n        opacity: 1;\n        transform: translatey(0%);\n    }\n}\n@keyframes apearingP{\n    from{\n        opacity: 0;\n        transform:  translateX(50%);\n    }\n    to{\n        opacity: 1;\n        transform: translateX(0%);\n    }\n}\n@keyframes apearingP2{\n    from{\n        opacity: 0;\n        transform:  translateX(-50%);\n    }\n    to{\n        opacity: 1;\n        transform: translateX(0%);\n    }\n}\n\n/* ------------  MEDIA QUERIES -------------- */\n/* ------------------------------------------ */\n@media (max-width: 1050px){\n    .section .h2{\n        font-size: 7em;\n    }\n    .section .h3{\n        font-size: 6em;\n    }\n    .about-right .h2{\n        font-size: 7em;\n    }\n    .about-right .p{\n        font-size: 2.2em;\n    }\n    .section-work .h2{\n        font-size: 7em;\n    }\n    .section-work .p{\n        font-size: 2.2em;\n    }\n    .grid .article .h3{\n        font-size: 2.2em;\n    }\n    .h4-container .h4{\n        font-size: 1.8em;\n    }\n    .section-cont .h2{\n        font-size: 7em;\n    }\n    .section-cont .p{\n        font-size: 2.2em;\n    }\n    .sm-ul .sm-li{\n        margin:0 2.5em\n    }\n    .a .svg{\n        width: 4em;\n        height: 4em;\n    }\n}\n\n@media (max-width: 980px){\n    .header{\n        background: none;\n        box-shadow: none;\n    }\n    .left-nav{\n        display: none;\n    }\n    .header .navbar{\n        display: none;\n    }\n    .section-about .about-left{\n        display: none;\n    }\n    .section-about .about-right{\n        width: 100%;\n    }\n}\n\n@media (max-width: 750px){\n    .section .h2{\n        font-size: 4.5em;\n    }\n    .section .h3{\n        font-size: 3.8em;\n    }\n    .about-right .h2{\n        font-size: 4.5em;\n    }\n    .about-right .p{\n        font-size: 1.8em;\n    }\n    .section-work .h2{\n        font-size: 4.5em;\n    }\n    .section-work .p{\n        font-size: 1.8em;\n    }\n    .section-cont .h2{\n        font-size: 4.5em;\n    }\n    .section-cont .p{\n        font-size: 1.8em;\n    }\n    .sm-ul .sm-li{\n        margin:0 2.2em\n    }\n    .a .svg{\n        width: 3.5em;\n        height: 3.5em;\n    }\n    .container-form{\n        width: 40rem;\n    }\n    .label{\n        font-size: 1.5em;\n    }\n}\n@media (max-width: 450px){\n    .popup{\n        width: 30rem;\n    }\n    .btn-p{\n        font-size: 1.4rem;\n    }\n    .section .h2{\n        font-size: 3.2em;\n    }\n    .section .h3{\n        font-size: 2.7em;\n    }\n    .section-work .p{\n        font-size: 1.4em;\n    }\n    .container-form{\n        width: 30rem;\n    }\n}",""]);const p=d},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},104:(n,e,t)=>{"use strict";n.exports=t.p+"816b68bcb8de7b9a611a.jpg"},61:(n,e,t)=>{var r=t(698).default;function o(){"use strict";n.exports=o=function(){return e},n.exports.__esModule=!0,n.exports.default=n.exports;var e={},t=Object.prototype,i=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function d(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{d({},"")}catch(n){d=function(n,e,t){return n[e]=t}}function u(n,e,t,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new z(r||[]);return i._invoke=function(n,e,t){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return T()}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var s=E(a,t);if(s){if(s===f)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var c=p(n,e,t);if("normal"===c.type){if(r=t.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(r="completed",t.method="throw",t.arg=c.arg)}}}(n,t,a),i}function p(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}e.wrap=u;var f={};function m(){}function h(){}function g(){}var y={};d(y,s,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(j([])));w&&w!==t&&i.call(w,s)&&(y=w);var b=g.prototype=m.prototype=Object.create(y);function x(n){["next","throw","return"].forEach((function(e){d(n,e,(function(n){return this._invoke(e,n)}))}))}function L(n,e){function t(o,a,s,c){var l=p(n[o],n,a);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==r(u)&&i.call(u,"__await")?e.resolve(u.__await).then((function(n){t("next",n,s,c)}),(function(n){t("throw",n,s,c)})):e.resolve(u).then((function(n){d.value=n,s(d)}),(function(n){return t("throw",n,s,c)}))}c(l.arg)}var o;this._invoke=function(n,r){function i(){return new e((function(e,o){t(n,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(n,e){var t=n.iterator[e.method];if(void 0===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=void 0,E(n,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=p(t,n.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[n.resultName]=o.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function S(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function z(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(k,this),this.reset(!0)}function j(n){if(n){var e=n[s];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var t=-1,r=function e(){for(;++t<n.length;)if(i.call(n,t))return e.value=n[t],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=g,d(b,"constructor",g),d(g,"constructor",h),h.displayName=d(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,d(n,l,"GeneratorFunction")),n.prototype=Object.create(b),n},e.awrap=function(n){return{__await:n}},x(L.prototype),d(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(n,t,r,o,i){void 0===i&&(i=Promise);var a=new L(u(n,t,r,o),i);return e.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},x(b),d(b,l,"Generator"),d(b,s,(function(){return this})),d(b,"toString",(function(){return"[object Generator]"})),e.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,z.prototype={constructor:z,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!n)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function t(t,r){return a.type="throw",a.arg=n,e.next=t,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=n,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),f},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),S(t),f}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var r=t.completion;if("throw"===r.type){var o=r.arg;S(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,t){return this.delegate={iterator:j(n),resultName:e,nextLoc:t},"next"===this.method&&(this.arg=void 0),f}},e}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},698:n=>{function e(t){return n.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.__esModule=!0,n.exports.default=n.exports,e(t)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports},687:(n,e,t)=>{var r=t(61)();n.exports=r;try{regeneratorRuntime=r}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{"use strict";function n(n,e,t,r,o,i,a){try{var s=n[i](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,o)}function e(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,c,"next",e)}function c(e){n(a,o,i,s,c,"throw",e)}s(void 0)}))}}t.d(r,{Z:()=>K});var o=t(687),i=t.n(o),a="undefined";function s(){return(s=e(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t=new FormData(this),n.next=4,fetch(a,{method:"POST",body:t,headers:{Accept:"application/json"}});case 4:n.sent.ok?(this.reset(),K()):alert("error al enviar el mensaje");case 6:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}const c=function(n){return s.apply(this,arguments)};var l=t(379),d=t.n(l),u=t(795),p=t.n(u),f=t(569),m=t.n(f),h=t(565),g=t.n(h),y=t(216),v=t.n(y),w=t(589),b=t.n(w),x=t(29),L={};L.styleTagTransform=b(),L.setAttributes=g(),L.insert=m().bind(null,"head"),L.domAPI=p(),L.insertStyleElement=v();d()(x.Z,L);x.Z&&x.Z.locals&&x.Z.locals;var E=document.querySelector("#preloader");function k(){E.style.display="none"}window.addEventListener("load",(function(){setTimeout(k,150)}));var S="cursor-disabled",z=document.querySelector("#pointer"),j=document.querySelector("#pointer2"),T=document.querySelector("#pointer-svg"),O=document.querySelector("#pointer2-svg"),C=document.documentElement,A="is-clicked",P="is-hidden",N="is-hover",_="is-hover-svg",I="is-hover-svg2";if("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)z.classList.add(S),j.classList.add(S);else{var M=function(n){C.style.setProperty("--cursor-x",n.clientX+"px"),C.style.setProperty("--cursor-y",n.clientY+"px")},R=function(){z.classList.add(A)},F=function(){z.classList.remove(A)},q=function(){z.classList.remove(P),j.classList.remove(P)},D=function(){z.classList.add(P),j.classList.add(P)},U=function(){document.querySelectorAll("a, button, input, textarea").forEach((function(n){n.addEventListener("mouseover",(function(){z.classList.add(N),j.classList.add(N),T.classList.remove("cls-1"),O.classList.remove("cls-2"),T.classList.add(_),O.classList.add(I)})),n.addEventListener("mouseout",(function(){z.classList.remove(N),j.classList.remove(N),T.classList.add("cls-1"),O.classList.add("cls-2"),T.classList.remove(_),O.classList.remove(I)}))}))};D(),document.addEventListener("mousemove",M),document.addEventListener("mousedown",R),document.addEventListener("mouseup",F),document.addEventListener("mouseenter",q),document.addEventListener("mouseleave",D),U(),document.body.classList.add("has-a-cursor")}var G=document.querySelector("#cv-button"),X=document.querySelector("#popup-close"),Z=document.querySelector("#message-close"),B=document.querySelector("#message-overlay"),V=document.querySelector("#popup-overlay"),H=document.querySelector("#popup"),$=document.querySelector("#message");G.addEventListener("click",(function(){H.classList.add(Y),V.classList.add(Y)})),X.addEventListener("click",(function(){H.classList.remove(Y),V.classList.remove(Y)})),Z.addEventListener("click",(function(){$.classList.remove(Y),B.classList.remove(Y)}));var Y="popup-grow";const K=function(){$.classList.add(Y),B.classList.add(Y)};document.querySelector("#form").addEventListener("submit",c)})()})();