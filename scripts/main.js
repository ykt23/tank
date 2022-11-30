var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt ('ведите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'добро пожаловать' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'привет'
}
myButton.onclick = function () {
    setUserName ();
}