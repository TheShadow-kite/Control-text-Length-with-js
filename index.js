// script
var textClass = document.querySelectorAll('.controle-2');
var classesLenght = textClass.length-1;
for (let i = 0; i <= classesLenght; i++) {
textClass[i].innerText = textClass[i].innerText.slice(0, 90) + ' ...';
}


// script as a function
function textContorlLength (c,l) {
    var textClass = document.querySelectorAll(c);
    var classesLenght = textClass.length-1;
    for (let i = 0; i <= classesLenght; i++) {
        textClass[i].innerText = textClass[i].innerText.slice(0, l) + ' ...';
    }
}
