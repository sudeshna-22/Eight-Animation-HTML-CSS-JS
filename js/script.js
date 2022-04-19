// @Author: Sudeshna Pandey //

//query selector allows to select class element id, class, tag

//selecting button
const button = document.querySelector('#checkbox');

//selecting animation
const semi_circle_one = document.querySelector('#dividone');
const semi_circle_two = document.querySelector('#dividtwo');
const semi_circle_three = document.querySelector('#dividthree');
const semi_circle_four = document.querySelector('#dividfour');

// add event listener to start button // toggle to add and remove the class
button.addEventListener('click', () => {
    semi_circle_one.classList.toggle('ani-element');
    semi_circle_two.classList.toggle('ani-element');
    semi_circle_three.classList.toggle('ani-element');
    semi_circle_four.classList.toggle('ani-element');
})

// @Author: Sudeshna Pandey //
// Reference: Internet, Youtube Videos, Google //