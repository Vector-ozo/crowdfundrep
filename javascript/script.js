
//  ------------------------------------BOOKMARK-----------------------------------
var bookmarkImage1 = document.querySelector('.bookmark__image-1');
var bookmarkImage2 = document.querySelector('.bookmark__image-2');
var bambooImage1 = document.querySelector('.bamboo__image-1');
var bambooImage2 = document.querySelector('.bamboo__image-2');

bambooImage1.addEventListener("click", () => {
    bambooImage1.classList.add('remove-1');
    bambooImage2.classList.add('add-2');
})

bambooImage2.addEventListener("click", () => {
    bambooImage1.classList.remove('remove-1');
    bambooImage2.classList.remove('add-2');
})


//  ------------------------------------BACK THIS PROJECT-----------------------------------
var backProject = document.querySelector('.bamboo__button');
var project = document.querySelector('.project');
var closeProject = document.querySelector('.close__project');
var projectButton = document.querySelectorAll('.project__button');


backProject.addEventListener('click', () => {
    project.classList.add('add-project');
})

closeProject.addEventListener('click', () => {
    project.classList.remove('add-project');
})


//  ------------------------------------COLOR BUTTONS-----------------------------------

var selected = document.querySelectorAll('.selected');
var innerProject = document.querySelectorAll('.inner__project');
// var projectButton = document.querySelectorAll('.project__button');


innerProject.forEach(function(inner) {
    var projectBtn = inner.querySelector('.project__button');
     
    projectBtn.addEventListener('click', function(event) {
        var button = event.target;
        var buttonContainer = button.parentElement.parentElement;
        buttonContainer.classList.toggle('color-button');

        buttonContainer.classList.toggle('border-line')

        innerProject.forEach(function(innerItem){
            if(inner !== innerItem) {
                innerItem.classList.remove('color-button');
                innerItem.classList.remove('border-line')
            }
        })


        var closeProject = document.querySelector('.close__project');
        closeProject.addEventListener('click', () => {
            inner.classList.remove('color-button');
            inner.classList.remove('border-line')
        })
        
    });

})

//--------------------Pledge Buttons ------------------------------------


var continueBtns = document.querySelectorAll('.button-2');
var modal = document.querySelector('.modal__section')
var modalBtn = document.querySelector('.modal__button');


continueBtns.forEach(function(continueBtn) {
    continueBtn.addEventListener('click', function(){
        project.classList.remove('add-project');        
        modal.classList.add('add-modal');
    })
})

modalBtn.addEventListener('click', function(event) {
    var btn = event.target;
    btn.parentElement.remove();
})


//------------------- NAVIGATION MENU ---------------------------

var navClose = document.querySelector('.close');
var navHamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('.nav__menu');
var navItem =document.querySelectorAll('.nav__item');


navHamburger.addEventListener('click', () =>{
    navMenu.classList.add('show-menu');
    navHamburger.classList.add('remove-hamburger');
    navClose.classList.add('show-close');
})

navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
    navHamburger.classList.remove('remove-hamburger');
    navClose.classList.remove('show-close');
})


navItem.forEach(n => n.addEventListener('click', closeMenu))

function closeMenu(){
    navMenu.classList.remove('show-menu');
    navClose.classList.remove('show-close');
    navHamburger.classList.remove('remove-hamburger')
}