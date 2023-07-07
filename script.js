let selectField = document.getElementById('select-field');
let selectText = document.getElementById('select-text');
let list = document.getElementById('list');
let options = document.getElementsByClassName('option');
let arrowIcon = document.getElementById('arrow-icon');

// Assign onclick event to each option
for (let option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    };
}

// Toggle visibility of the option list and rotate the arrow icon when select field is clicked
selectField.onclick = function () {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
};
